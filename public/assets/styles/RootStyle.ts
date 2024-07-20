import styled from "styled-components";
interface ControlIcon{
  appearance:boolean
}
export const Layout = styled.div`
   background-color: #fff;
`;

export const HeaderContainer = styled.header<ControlIcon>`
    background-color:transparent;
    width: 100%;
    position: relative;
    .logo{
          img{
            width: 128px;
            height: 128px;
          }
       }
    .main-content{
       .middle-list-menu{
         .title-bar{
           a{
            .bs-chevrdown{
                width:40px;
                height:20px;
                cursor: pointer;
              }
              .bs-chevrup{
                width:40px;
                height:20px;
                cursor: pointer;
              }
           }
         }
       }
    }
    .control-icon{
      display: none;
    }
    @media (min-width:350px){
      display: sticky;
      top: 0px;
      height: auto;
      min-height: 70px;
      .logo{
          position: absolute;
          left: 8px;
          top: 8px;
          img{
            width: 37px;
            height: 37px;
          }
        }
      .control-icon{
        padding-top: 10px;
        display: flex;
        justify-content: right;
        align-items: center;
        padding-right: 20px;
        .menu-icon{
            display: ${props => (props.appearance ? 'block' : 'none')};
            cursor: pointer;
        }
        .close-icon{
            display: ${props => (props.appearance ? 'none' : 'block')};
            cursor: pointer;
        }
      }
      .main-content{
        padding-top: 15px;
        display: ${props => (props.appearance ? 'none' : 'block')};
        .middle-list-menu{
          height: 100vh;
          background-color: #fff;
          .title-bar{
            min-height: 20px;
            height: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            .title{
              min-height: 20px;
              height: auto;
              width: 100%;
              .a-title{
              color: #000;
              min-height: 40px;
              width: 100%;
              font-size: 16px;
              border-bottom: 1px solid #B4B4B4;
              display: flex;
              line-height: 24px;
              justify-content: space-between;
              align-items: center;
              padding: 9px 15px;
              font-weight: 500;
              letter-spacing: 0.04em;
            }
              .bs-chevrdown{
                  width: 20px;
                  height: 20px;
                  cursor: pointer;
                  font-weight: bold;
                  color: #000;
                  position: absolute;
                  right: 15px;
                  top: 0px;
                }
              .bs-chevrup{
                width: 20px;
                height: 20px;
                cursor: pointer;
                font-weight: bold;
                color: #000;
                position: absolute;
                right: 15px;
                top: 0px;
              }
            }
            .icon-dropdown{
              position: relative;
              width: 100%;
              padding-top: 10px;
              .drop-down-section{
                position: absolute;
                width: 100%;
                top: 0px;
                background-color: #f1f1f1;
                z-index: 9999;
                padding: 10px 20px;
                height: auto;
                overflow: auto;

                .head{
                  display: flex;
                  justify-content: left;
                  align-items: center;
                  padding: 21px 0 0;
                  gap: 10px;
                  .icon{
                      img{
                        width: 28.5px;
                        height: 28.5px;
                      }
                  }
                  .label{
                      .dropdown-item{
                        border: none;
                        text-decoration: unset;
                        font-weight: 800;
                        color:#000;
                      }
                  }
                }
                .content{
                  color: #B4B4B4;
                  line-height: 20px;
                  padding: 21px 0 0;
                }
              }
            }
          }
          .discover-more{
          h3{
            color: #000;
              min-height: 40px;
              width: 100%;
              font-size: 16px;
              border-bottom: 1px solid #B4B4B4;
              display: flex;
              line-height: 24px;
              justify-content: space-between;
              align-items: center;
              padding: 9px 15px;
              font-weight: 500;
              letter-spacing: 0.04em;
          }
        }
        .case-study{
          h3{
            color: #000;
              min-height: 40px;
              width: 100%;
              font-size: 16px;
              border-bottom: 1px solid #B4B4B4;
              display: flex;
              line-height: 24px;
              justify-content: space-between;
              align-items: center;
              padding: 9px 15px;
              font-weight: 500;
              letter-spacing: 0.04em;
          }
        }
        .about-us{
          h3{
            color: #000;
              min-height: 40px;
              width: 100%;
              font-size: 16px;
              border-bottom: 1px solid #B4B4B4;
              display: flex;
              line-height: 24px;
              justify-content: space-between;
              align-items: center;
              padding: 9px 15px;
              font-weight: 500;
              letter-spacing: 0.04em;
          }
        }
        }
      }
    }
`;
export const FooterContainer = styled.footer`
`;
export const BannerContainer = styled.div`
`;