import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  simpleCss3,
  simpleHtml5,
  simpleReact,
  simpleWordpress,
  simpleNodedotjs,
  simpleTypescript,
  simpleJavascript,
  simpleAngular,
} from '@ng-icons/simple-icons';

enum EListOfKnowledge {
  HTML,
  CSS,
  REACT,
  WORDPRESS,
  NODE,
  TYPESCRIPT,
  JAVASCRIPT,
  ANGULAR,
}

interface IListOfKnowledge {
  type: EListOfKnowledge;
  icon: string;
}

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
  viewProviders: [
    provideIcons({
      simpleCss3,
      simpleHtml5,
      simpleReact,
      simpleWordpress,
      simpleNodedotjs,
      simpleTypescript,
      simpleJavascript,
      simpleAngular,
    }),
  ],
})
export class KnowledgeComponent {
  description: string = '';
  eListOfKnowledge = EListOfKnowledge;
  listOfKnowledge: IListOfKnowledge[] = [
    {
      type: EListOfKnowledge.HTML,
      icon: 'simpleHtml5',
    },
    {
      type: EListOfKnowledge.CSS,
      icon: 'simpleCss3',
    },
    {
      type: EListOfKnowledge.ANGULAR,
      icon: 'simpleAngular',
    },
    {
      type: EListOfKnowledge.JAVASCRIPT,
      icon: 'simpleJavascript',
    },
    {
      type: EListOfKnowledge.TYPESCRIPT,
      icon: 'simpleTypescript',
    },
    {
      type: EListOfKnowledge.REACT,
      icon: 'simpleReact',
    },
    {
      type: EListOfKnowledge.WORDPRESS,
      icon: 'simpleWordpress',
    },
    {
      type: EListOfKnowledge.NODE,
      icon: 'simpleNodedotjs',
    },
  ];

  handleSetDescription(type: EListOfKnowledge | null): void {
    switch (type) {
      case EListOfKnowledge.HTML:
        this.description =
          'HTML é uma linguagem de marcação usada para estruturar o conteúdo em uma página web. Ele utiliza uma sintaxe baseada em tags para definir elementos como títulos, parágrafos, links, imagens e outros componentes, permitindo a criação de documentos hipertexto para serem exibidos em navegadores web.';
        break;

      case EListOfKnowledge.CSS:
        this.description =
          'CSS é uma linguagem de estilo utilizada para controlar a apresentação e o layout de documentos HTML. Ele permite definir cores, fontes, espaçamentos, tamanhos e posicionamentos dos elementos, possibilitando a criação de páginas web visualmente atraentes e responsivas em diferentes dispositivos.';
        break;

      case EListOfKnowledge.ANGULAR:
        this.description =
          'Angular é um framework de desenvolvimento front-end mantido pelo Google. Ele é utilizado para construir aplicativos web escaláveis e dinâmicos. Angular utiliza a linguagem TypeScript e apresenta um conjunto robusto de ferramentas para gerenciar o estado da aplicação, criar componentes reutilizáveis, realizar roteamento e interagir com APIs.';
        break;

      case EListOfKnowledge.JAVASCRIPT:
        this.description =
          'JavaScript é uma linguagem de programação de alto nível e orientada a objetos amplamente utilizada no desenvolvimento web. Executada no navegador, ela possibilita a manipulação dinâmica do Document Object Model (DOM), interação com o usuário, manipulação de eventos e execução de operações assíncronas.';
        break;

      case EListOfKnowledge.TYPESCRIPT:
        this.description =
          'TypeScript é um superset do JavaScript que adiciona recursos de tipagem estática à linguagem. Ele foi desenvolvido pela Microsoft e é amplamente utilizado no desenvolvimento Angular. TypeScript facilita o desenvolvimento de código mais seguro e autodocumentado, melhorando a manutenção e a escalabilidade de projetos.';
        break;

      case EListOfKnowledge.REACT:
        this.description =
          'React é uma biblioteca JavaScript mantida pelo Facebook, focada na construção de interfaces de usuário (UI) reativas e eficientes. Utilizando uma abordagem de componentes reutilizáveis, React permite a criação de Single Page Applications (SPAs) e proporciona uma renderização eficiente por meio da sua Virtual DOM.        ';
        break;

      case EListOfKnowledge.WORDPRESS:
        this.description =
          'WordPress é um sistema de gerenciamento de conteúdo (CMS) que simplifica a criação e administração de sites e blogs. Ele oferece uma interface amigável, suporte a plugins e temas, além de uma comunidade ativa. WordPress é conhecido pela sua versatilidade e é amplamente utilizado por iniciantes e desenvolvedores avançados.        ';
        break;

      case EListOfKnowledge.NODE:
        this.description =
          'Node.js é um ambiente de execução JavaScript do lado do servidor. Ele permite que desenvolvedores utilizem JavaScript para construir aplicações server-side, como servidores web, APIs e aplicações em tempo real. Node.js é conhecido pela sua eficiência, escalabilidade e é frequentemente utilizado em conjunto com frameworks como Express para o desenvolvimento de servidores web robustos.';
        break;

      default:
        this.description = '';
    }

    console.log(this.description);
  }
}
