import { useRef, useState } from "react";
import "./Home.css";

// objetos contém valores únicos, nao se repetem
// array, os valores podem se repetir exemplo, uma lista de usuários

// array de objeto - como é feito o retorno dentro do map?
// Resposta
// itens[0], itens[1] ... ele acessa um por um dentro do array retornando uma lista de 4 itens na tela
// indice (index) do array começa 0,1,2,3
const itens = [
  {
    id: 1,
    titulo: "Conexão com o mercado de trabalho",
    conteudo:
      "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação.",
  },
  {
    id: 2,
    titulo: "Aprendizado imersivo",
    conteudo:
      "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação.",
  },
  {
    id: 3,
    titulo: "Ensino personalizado",
    conteudo:
      "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação.",
  },
  {
    id: 4,
    titulo: "Inovação e transformação",
    conteudo:
      "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação.",
  },
];

export function Home() {
  // esse useRef é referenciado lá embaixo e lá tem uma explicação sobre o que faz
  const proxSessao = useRef<HTMLDivElement | null>(null);
  //   useState armazena um estado, exemplo o isOpen = 1 é o estado atual e o setIsOpen é a variável que pode atualizar o estado atual, como setIsOpen(2)
  //   useState não se limita apenas em mudar o estado de um número, mas pode ser um array, objeto, string e etc
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);

  //   Saiba que, esses handle que foram criados ele são um evento onClick, a gente criou funções para acionar quando o usuário clicar
  //   quando clicar na seta para abaixo, ele manda para abaixo
  const handleScrollDown = () => {
    proxSessao.current?.scrollIntoView({ behavior: "smooth" });
  };

  //   quando clicar na seta para acima, ele manda para acima
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //  aqui mexe com o modal
  //  abrir o modal
  const handleOpenModal = (src: string) => {
    setSelectedImage(src);
    setIsOpenModal(true);
  };

  //  fechar o modal
  const handleCloseModal = () => {
    setIsOpenModal(false);
    setSelectedImage("");
  };

  //   toda vez que clicar no botão do acordion ele aciona essa função
  const handleAccordion = (index: number) => {
    // se o index for igual a o index anterior retorna nulo, caso contrário envia o novo index
    setIsOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <header>
        <img width="100px" src="/assets/logo-fiap.png" alt="logo fiap" />
      </header>

      <section className="sessao-inicial">
        <div>
          <h1 className="titulo">A MAIOR FACULDADE</h1>
          <h1 className="sub-titulo">DE TECNOLOGIA</h1>
          <p className="paragrafo">
            Referência em tecnologia e inovação no Brasil, a FIAP é uma
            faculdade que prepara profissionais para o futuro, com um ensino
            prático, professores atuante no mercado e desafios reais que
            conectam os alunos as grandes empresas.
          </p>
        </div>

        <div className="scroll-down">
          <p>SCROLL DOWN</p>
          <img
            onClick={handleScrollDown}
            width="40px"
            src="/assets/icone-seta.svg"
            alt="Botão de seta para abaixo"
          />
        </div>
      </section>

      {/* essa ref existe, pois está guiando o botão de seta de baixo a ir para essa sessão quando o usuário clicar, ai ele chama o evento do click do botão e envia para aqui */}
      <section ref={proxSessao} className="educacao-tech">
        <h1>EDUCAÇÃO E TECH</h1>
        <div className="content">
          <div className="container">
            <div>
              <p>
                A FIAP é muito mais do que uma faculdade de tecnologia, é um
                verdadeiro ecossistema de inovação e aprendizado. Conhecida por
                sua abordagem moderna e focada no mercado, a instuição é
                referência quando se trata de formar profissionais capacitados
                para os desafios do futuro. Seja na graduação, pós graduação ou
                cursos livres, a FIAP entrega um ensino que mistura teoria e
                prática, preparando os alunos para atuar em empresas de ponta ou
                até mesmo empreender.
              </p>

              <img
                src="assets/imagem-fiap.jpg"
                alt="Imagem da Fiap X Next"
                className="imagem-fiap"
                onClick={() => handleOpenModal("assets/imagem-fiap.jpg")}
              />

              {/* se o modal estiver aberto então exibe a imagem do modal na tela */}
              {isOpenModal && (
                // handleCloseModal quando você clicar em qualquer local da tela o modal se fecha
                <div className="modal-overlay" onClick={handleCloseModal}>
                  <img
                    className="imagem-modal"
                    src={selectedImage}
                    alt="Imagem da Fiap X Next"
                    onClick={() => handleOpenModal("assets/imagem-fiap.jpg")}
                  />

                  <img
                    className="icone-fechar"
                    src="assets/icone-fechar.svg"
                    alt="Ícone de fechar"
                  />
                </div>
              )}
            </div>

            <div className="conteudo-fiap">
              <p>
                Com um corpo docente formado por profissionais atuantes no
                mercado, a FIAP não ensina apenas tecnologia, mas também
                negócios, inovação e liderança. Seus cursos abrangem diversas
                áreas, incluindo:
              </p>
              <h5>
                <i>/</i> Tecnologia e Desenvolvimento
              </h5>
              <h6>
                <b>-</b> Desenvolvimento de Software
              </h6>
              <h6>
                <b>-</b> Inteligência Artificial
              </h6>
              <h6>
                <b>-</b> Data Science
              </h6>
              <h6>
                <b>-</b> Cibersegurança
              </h6>

              <h5>
                <i>/</i> UX/UI, Marketing Digital
              </h5>
              <h5>
                <i>/</i> Metodologias e Gestão
              </h5>
              <p>
                Além disso, a instuição incentiva fortemente o uso dessas
                metodologias e outras abordagens inovadoras que fazem parte do
                dia a dia de grandes empresas.
              </p>
            </div>
          </div>
        </div>

        <img
          className="seta-de-baixo"
          onClick={handleScrollUp}
          width="40px"
          src="assets/icone-seta-acima.svg"
          alt="Botão de seta para cima"
        />
      </section>

      <section className="paralax"></section>

      <section className="nossa-estrutura">
        <h1>Nossa estrutura</h1>
        <div className="container">
          <hr />
          {/* traz os itens um por um para serem renderizados na tela */}
          {itens.map((item, index) => (
            <div
              // retorna o id do objeto dentro do array
              key={item.id}
              //   se isOpen for igual ao index atual, ex: isOpen = 1 e o index = 1, então expande o conteúdo no máximo 300px de altura.
              className={`accordion-item ${isOpen === index ? "active" : ""}`}
            >
              <div className="accordion-header">
                {/* retorna o título que está dentro do objeto do array */}
                <h3>{item.titulo}</h3>
                {/* quando tiver aberto mostra o ícone de menos e quando tiver fechado mostra o ícone de mais */}
                {/* se o isOpen é igual ao index, ou seja, se o botão foi clicado ele troca o ícone, é tipo um true ou false, mas perguntando se o isOpen é igual ao index */}
                {isOpen == index ? (
                  <img
                    className="accordion-open"
                    src="assets/icone-de-menos.svg"
                    width={30}
                    onClick={() => handleAccordion(index)}
                  />
                ) : (
                  <img
                    className="accordion-open"
                    src="assets/icone-de-mais.svg"
                    width={30}
                    onClick={() => handleAccordion(index)}
                  />
                )}
              </div>
              <div className="accordion-conteudo">
                {/* retorna o conteúdo dentro do objeto do array */}
                <p>{item.conteudo}</p>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </section>

      <section className="saiba-mais">
        <h1>Quer saber mais?</h1>
        <button>Entre em contato</button>
      </section>
    </div>
  );
}
