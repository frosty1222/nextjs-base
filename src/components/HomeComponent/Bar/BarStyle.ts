import styled from 'styled-components'


export const ServiceStartedContainer = styled.div`
    @media (min-width:350px) {
        padding-top: 45px;
        padding-right: 7px;
        padding-left: 4px;
        background-color: #fff;
        .image-section{
            position: relative;
            .button-section{
                position: absolute;
                top:65%;
                left: 10px;
                width: 100px;
                padding: 3px 5px 3px 4px;
                display: flex;
                justify-content: center;
                column-gap: 20px;
                align-items: center;
                button{
                    border: none;
                    outline: none;
                    .button{
                        font-size: 5.25px;
                        line-height: 10.9px;
                        background-color: #FFCD06;
                        color: #000;
                        border-radius: 100px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 55px;
                        height: 25px;
                        box-shadow: 0px 1px 2px rgba(198, 228, 246, 0.05);
                        transition: width 0.3s ease;
                        &:hover{
                            width: 100px;
                            transform: scale(1.05);
                        }
                    }
                }
                .bs-arrow-right{
                    position: absolute;
                    right:5px;
                }
            }
        }
        .heading{
            .heading-line{
                font-size: 14px;
                line-height: 20px;
                letter-spacing: 0;
                padding-bottom: 14px;
                color:#B4B4B4;
                padding-top:10px;
            }
        }
        .list-care{
            li{
                list-style: none;
                color: #B4B4B4;
                border-bottom: 1px solid #D4D4D4;
                padding: 12px 0;
            }
        }
    }
`;