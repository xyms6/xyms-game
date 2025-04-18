import { AiOutlineSend } from 'react-icons/ai';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className='footer-top'>
        <div className='footer-content text-white d-grid container'>
          <div className='footer-item'>
            <a href="#" className='navbar-brand text-white text-uppercase no-wrap d-block'>
              cool <span>games</span>
            </a>
            <p className='para-text'>Puxando API Rawg para projeto de estudo sobre puxar imagens     SENAI - 2025</p>
          </div>

          <div className='footer-item'>
            <h5 className='footer-item-title text-uppercase'>Links & Menu</h5>
            <ul className='footer-item-links'>
              <li><a href="#" className='text-white'>Jogos</a></li>
              <li><a href="#" className='text-white'>Produtos</a></li>
              <li><a href="#" className='text-white'>Rede Social</a></li>
              <li><a href="#" className='text-white'>Comunidade</a></li>
            </ul>
          </div>

          <div className='footer-item'>
            <h5 className='footer-item-title text-uppercase'>Suporte</h5>
            <ul className='footer-item-links'>
              <li><a href="#" className='text-white'>Configuração & Privacidade</a></li>
              <li><a href="#" className='text-white'>Ajuda & Suporte</a></li>
              <li><a href="#" className='text-white'>Ação ao Vivo</a></li>
              <li><a href="#" className='text-white'>Nossas Noticias</a></li>
            </ul>
          </div>

          <div className='footer-item'>
            <h5 className='footer-item-title text-uppercase'>Novas Noticias</h5>
            <p className='para-text'>Inscreva se para receber as nossas novidades.</p>

            <form className='newsletter-form'>
              <div className='input-group d-flex align-items-stretch'>
                <input type="text" className="input-group-field" placeholder = "Your email address" />
                <button className='input-group-btn bg-white d-inline-flex align-items-center justify-content-center'>
                  <AiOutlineSend size = { 18 } />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <div className='container d-flex flex-column text-center'>
          <p className='footer-bottom-text text-green'>Copyright &copy; 2025 XYMS - Todos os direitos reservados.</p>
          <ul className='footer-bottom-links d-flex justif-content-center'>
            <li><a href="#" className='text-white'>Home</a></li>
            <li><a href="#" className='text-white'>Centro de ajuda</a></li>
            <li><a href="#" className='text-white'>Contato</a></li>
            <li><a href="#" className='text-white'>Termos & Condições</a></li>
          </ul>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default Footer;

const FooterWrapper = styled.footer`
  .footer-top{
    background-color: var(--clr-violet-darker);
    padding: 78px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }

  .footer-content{
    row-gap: 24px;
  }

  .navbar-brand{
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 18px;

    span{
      color: var(--clr-green-normal);
    }
  }

  .footer-item{
    text-align: center;

    .para-text{
      max-width: 380px;
      margin-right: auto;
      margin-left: auto;
    }
  }

  .footer-item-links{
    li{
      margin: 6px 0;

      a{
        color: rgba(255, 255, 255, 0.9);

        &:hover{
          color: var(--clr-white);
          text-decoration: underline;
        }
      }
    }
  }

  .footer-item-title{
    margin-bottom: 12px;
    font-size: 20px;
    letter-spacing: 0.03em;
    font-weight: 700;
  }

  .newsletter-form{
    margin-top: 18px;

    .input-group{
      height: 48px;
      max-width: 284px;
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      transition: var(--transition-default);

      :has(.input-group-field:focus){
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }

      &-field{
        background: #0C0A24;
        padding-left: 22px;
        padding-right: 22px;
        color: var(--clr-white);
        flex: 1;

        &::placeholder{
          color: var(--clr-white);
          opacity: 0.8;
        }
      }

      &-btn{
        color: #0C0A24;
        width: 48px;

        &:hover{
          transform: scale(1.1);
        }
      }
    }
  }

  .footer-bottom{
    background: #04020E;
    padding: 20px 0;
    &-text{
      font-weight: 500;
    }

    li{
      margin-left: 18px;
    }

    &-links{
      margin-top: 12px;
    }
  }

  @media screen and (min-width: 768px){
    .footer-content{
      grid-template-columns: repeat(2, 1fr);
      column-gap: 32px;

      .footer-item{
        text-align: left;

        .para-text{
          margin-left: 0;
        }
      }

      .input-group{
        margin-left: 0;
      }
    }

    .footer-bottom{
      & > .container{
        flex-direction: var(--clr-white);
        justify-content: space-between;
      }

      li{
        margin-left: 32px;
      }
      &-links{
          margin-top: 0;
        }
    }
  }

  @media screen and (min-width: 992px){
    flex-direction: row;
    text-align: center;

    .footer-bottom-links{
      justify-content: center;
    }
  }

  @media screen and (min-width: 1200px){
    .footer-content{
      grid-template-columns: 3fr 2fr 2fr 3fr;
    }
  }
`;
