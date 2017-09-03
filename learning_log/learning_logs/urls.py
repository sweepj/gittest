from django.conf.urls import url

from . import views

urlpatterns = [
	url(r'^$', views.index, name='index'),

	#Вывод всех тем
	url(r'^topics/$', views.topics, name='topics'),

	#Страница с подробной информацией по отдельной теме
	url(r'^topics/(?P<topic_id>\d+)/$', views.topic, name='topic'),

	#Страница для добавления новой темы
	url(r'^new_topic/$', views.new_topic, name='new_topic'),

	#Страница для добавление записи
	url(r'^new_entry/(?P<topic_id>\d+)/$', views.new_entry, name='new_entry'),

	#Страница для редактирования
	url(r'^edit_entry/(?P<entry_id>\d+)/$', views.edit_entry, name='edit_entry'),
	

]
