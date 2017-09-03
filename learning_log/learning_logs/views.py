from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse

from django.shortcuts import render

from .models import Topic, Entry
from .forms import TopicForm, EntryForm

def index(request):
	"""Домашняя страница приложения Learning Log"""
	return render(request, 'learning_logs/index.html')

def topics(request):
	topics = Topic.objects.order_by('date_added')
	context = {'topics' : topics}
	return render(request, 'learning_logs/topics.html', context)

def topic(request, topic_id):
	topic = Topic.objects.get(id=topic_id)
	entries = topic.entry_set.order_by('-date_added')
	context = {'topic': topic, 'entries': entries}
	return render(request, 'learning_logs/topic.html', context)

def new_topic(request):
	#Определяет новую тему.
	if request.method != 'POST': #Проверка GET или POST
		#Данные не отправлялись. Создается пустая форма.
		form = TopicForm() #Создание экземпляра TopicForm
	else:
		#Отправить данные POST, создается пустая форма.
		form = TopicForm(request.POST) #Создаем экзампляр TopicForm и передаем данные, введенные пользователем, хранящиеся в request.POST
		if form.is_valid(): #Проверка, is_valid проверяет, что все обязязательные поля заполнены
							#Все поля формы по умолчанию считаются обязательными
			form.save() #Запись в базу данных

			#Используем вызов reverse для получения URL-адреса страницы topics и передаем его функции HttpResponseRedirect
			#перенаправляет на страницу topics
			return HttpResponseRedirect(reverse('learning_logs:topics'))

	context = {'form' : form} #Форма шаблона переменной form
	return render(request, 'learning_logs/new_topic.html', context)


def new_entry(request, topic_id):
	topic = Topic.objects.get(id=topic_id) # Получение правильного объекта темы
	if request.method != 'POST':
		form = EntryForm()
	else:
		#Отправлены данные POST; обработать данные
		form = EntryForm(data = request.POST)
		if form.is_valid():
			new_entry = form.save(commit=False) #commit=False нужен для того чтобы создать новый объект записи и сохранить его в new_entry, но не сохранять пока в базу данных
			new_entry.topic = topic #Присваиваем new_entry.topic тему прочитанную из базы данных в начале функции
			new_entry.save()
			return HttpResponseRedirect(reverse('learning_logs:topic', args=[topic_id]))

	context = {'topic' : topic, 'form' : form}
	return render(request, 'learning_logs/new_entry.html', context)


def edit_entry(request, entry_id):
	#Редактирует существующие записи
	entry = Entry.objects.get(id=entry_id)
	topic = entry.topic

	if request.method != 'POST':
		form = EntryForm(instance=entry)
	else:
		#Отправка данных POST; обработать данные
		form = EntryForm(instance=entry, data=request.POST)
		if form.is_valid():
			form.save()
			return HttpResponseRedirect(reverse('learning_logs:topic', args=[topic.id]))

	context = {'entry' : entry, 'topic' : topic, 'form' : form}
	return render(request, 'learning_logs/edit_entry.html', context)
