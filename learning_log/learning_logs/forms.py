from django import forms

from .models import Topic,Entry

class TopicForm(forms.ModelForm):
    class Meta:
        model = Topic #Создается форма на базе модели Topic
        fields = ['text'] #Размещает поле text
        labels = {'text' : ''} #Говорит о том что не нужно генерировать подпись для текстового поля

class EntryForm(forms.ModelForm):
    class Meta:
        model = Entry
        fields = ['text']
        labels = {'text' : ''}
        widgets = {'text' : forms.Textarea(attrs={'cols' : 80})} #Элемент формы HTML стр 413 книг
