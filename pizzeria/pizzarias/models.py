from django.db import models

class Pizza(models.Model):
	name = models.CharField(max_length=50)
	def __str__(self):
 		return self.name

class Topping(models.Model):
	pizza = models.ForeignKey(Pizza)
	name = models.CharField(max_length=30)

	class Meta:
		verbose_name_plural = 'Toppings'

	def __str__(self):
		return  self.pizza.name + ":" + ' "' + self.name + '"'
