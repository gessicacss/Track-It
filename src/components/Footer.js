import styled from "styled-components"

export default function Footer(){
    return (
        <ContainerFooter></ContainerFooter>
    )
}

const ContainerFooter = styled.div`
    height:91px;
    width:100%;
    position:fixed;
    bottom:0;
    left:0;
`

const FooterNav = styled.div`
    height:70px;
    background-color: #fff;
`