import styled from 'styled-components'


export const NavBox = styled.nav`  
    background-color: lightblue;
    width: 300px;

    .title {
        font-size: '24px';
        color: 'red';
        line-height: 40px;

        &:hover {
            color: 'blue';
        }
    }
`;
export const NavBarBox = styled.div.attrs(props => {
    return {
        size: props.size || 18 // 这里为传入的值设置默认值为18，若有属性传入，则使用相应传入的值
    }
})`
    line-height: 40px;
    a {
        font-size: ${props => props.size}px;
        color:  #000;
        margin-right: 10px;

        &:hover {
            color: ${props => props.hover};
        }
    }
`