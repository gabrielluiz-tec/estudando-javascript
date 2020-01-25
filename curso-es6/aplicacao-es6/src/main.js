import api from './api'

class App {
    constructor() {
        this.repositories = []

        this.formEl = document.getElementById('repo-form')
        this.inputEl = document.querySelector('input[name=repository]')
        this.listEl = document.getElementById('repo-list')

        this.registerHandlers()
    }

    // Registra os eventos
    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event)
    }

    setLoading(loading = true) {
        if (loading === true) {
            let loadingEl = document.createElement('span')
            loadingEl.appendChild(document.createTextNode('Carregando...'))
            loadingEl.setAttribute('id', 'loading')

            this.formEl.appendChild(loadingEl)
        } else {
            document.getElementById('loading').remove()
        }
    }

    async addRepository(event) {
        event.preventDefault()

        const repoInput = this.inputEl.value

        if (repoInput.length === 0) {
            return
        }

        this.setLoading()

        try {
            const response = await api.get(`/repos/marcelopoars/${repoInput}`)

            const { name, description, html_url, owner: { avatar_url } } = response.data
    
            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            })
            
            this.inputEl.value = ''
            this.inputEl.focus()
            this.render()

        } catch (error) {
            alert('Repositório não foi encontrado.')
        }

        this.setLoading(false)
    }

    render() {
        this.listEl.innerHTML = ''

        // O método 'forEach' apenas percorre o array sem efetuar alterações
        this.repositories.forEach( repo => {
            let imgEl = document.createElement('img')
            imgEl.setAttribute('src', repo.avatar_url)
            
            let titleEl = document.createElement('strong')
            titleEl.appendChild(document.createTextNode(repo.name))
            
            let descriptionEl = document.createElement('p')
            descriptionEl.appendChild(document.createTextNode(repo.description))
            
            let linkEl = document.createElement('a')
            linkEl.setAttribute('href', repo.html_url)
            linkEl.setAttribute('target', '_blank')
            linkEl.appendChild(document.createTextNode('Acessar'))

            let divImg = document.createElement('div')
            let divInfos = document.createElement('div')

            let listItemEl = document.createElement('li')

            divImg.appendChild(imgEl)
            divInfos.appendChild(titleEl)
            divInfos.appendChild(descriptionEl)
            divInfos.appendChild(linkEl)

            listItemEl.appendChild(divImg)
            listItemEl.appendChild(divInfos)

            this.listEl.appendChild(listItemEl)
        })
    }

}

new App()