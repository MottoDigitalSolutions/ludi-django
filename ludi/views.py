from django.shortcuts import render, redirect


def home_page(request):
    context = {
        "title": "Ludi",
        "content": "",
    }

    return render(request, "home_page.html", context)


def promociones_page(request):
    context = {
        "title": "Ludi | Promociones",
        "content": "Welcome to the hompage",
    }

    return render(request, "promociones_page.html", context)


def empresas_page(request):
    context = {
        "title": "Ludi | Empresas",
        "content": "Welcome to the hompage",
    }

    return render(request, "empresas_page.html", context)


def nosotros_page(request):
    context = {
        "title": "Ludi | Nosotros",
        "content": "Welcome to the hompage",
    }

    return render(request, "nosotros_page.html", context)


def contacto_page(request):
    context = {
        "title": "Ludi | Contacto",
        "content": "Welcome to the hompage",
    }

    return render(request, "contacto_page.html", context)


def prevencion_page(request):
    context = {
        "title": "Ludi | Prevencion",
        "content": "Welcome to hompage",
    }

    return render(request, "prevencion_page.html", context)


def que_es_page(request):
    context = {
        "title": "Ludi | Prevencion",
        "content": "Welcome to hompage",
    }

    return render(request, "que_es_page.html", context)


def empresarial_page(request):
    context = {
        "title": "Ludi | Prevencion",
        "content": "Welcome to hompage",
    }

    return render(request, "empresarial_page.html", context)


def integral_page(request):
    context = {
        "title": "Ludi | Prevencion",
        "content": "Welcome to hompage",
    }

    return render(request, "integral_page.html", context)


def plus_page(request):
    context = {
        "title": "Ludi | Prevencion",
        "content": "Welcome to hompage",
    }

    return render(request, "plus_page.html", context)


def genetest_page(request):
    context = {
        "title": "Ludi | Prevencion",
        "content": "Welcome to hompage",
    }

    return render(request, "genetest_page.html", context)


def especialidad_page(request):
    context = {
        "title": "Ludi | Prevencion",
        "content": "Welcome to hompage",
    }

    return render(request, "especialidad_page.html", context)
