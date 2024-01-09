import { keyframes, styled } from "styled-components";



interface ButtonProps {
    primary?: boolean;
    type?: string;
}

interface StringColor {
    [key: string]: string;
}

const color: StringColor = {
    white: "#fff",
    primary: "#bf4f74",
    dark: "#000000",
};

const lightningColor: StringColor = {
    primary: "yellow",
    secondary: "black",
};

const tomatoColor: StringColor = {
    primary: "tomato",
    secondary: "white",
};

interface ThemeProps {
    main?:string;
    color?:string
}

interface ThemeAdvanceProps {
    bg?:string;
    clr?:string;
}

// Demo 7
export const Link = styled.a`
    display: flex;
    align-items: center;
    padding: 5px 10px;
    background: papayawhip;
    color: #bf4f74;
    text-decoration: none;
`;

export const Icon = styled.svg`
    flex: none;
    transition: fill 0.25s;
    width: 48px;
    height: 48px;
    ${Link}: hover & {
        fill: rebeccapurple;
    }
`;

export const Label = styled.span`
    display: flex;
    align-items: center;
    line-height: 1.2;

    &::before {
        content: "◀";
        margin: 0, 
    }
`


// Demo6 Animation style
const rotate = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
`;

export const Rotate = styled.div`
    animation: ${rotate} 5s linear infinite;
    padding: 2rem 1rem;
    font-size: 2rem
`


// Demo 5 - Nested theme
export const AdvanceButton = styled.button<ThemeAdvanceProps>`
    color: ${props => (props.theme.clr)};
    border: 2px dashed ${props => (props.theme.bg)};
    background: ${props => (props.theme.bg)};
    font-size: 1em;
    margin : 1em;
    padding: 0.25em 1em;
    border-radius: 3px
`;

export const advanceTheme = {
    clr: "red",
    bg: "yellow"
}

export const investTheme = ({clr,bg}: ThemeAdvanceProps) => ({
    clr:bg, 
    bg: clr
})


// Demo 4
export const ThemeButton = styled.button<ThemeProps>`
    font-size: 1rem;
    margin: 1rem;
    padding: .25rem 1rem;
    border-radius: 3px;

    color: ${props => (props.theme.color)};
    border: 2px dotted ${props => (props.theme.main)};
    &:hover {
        color: white;
        background-color: ${(props) => props.theme.color};
        border: 2px solid ${(props) => props.theme.main};
    }
`
ThemeButton.defaultProps =  {
    theme: {
        main: "#bf4f74",
        color: "#bf4f74",
    }
}

export const buttonTheme = {
    main: "chocolate",
    color: " chocolate"
}

export const buttonDarkTheme = {
    main: "red",
    color: " red"
}

export const TextDetail = styled.p`
    color: ${(props) => props.theme.color}
`

// Demo 2
export const NormalButton = styled.button<ButtonProps>`
    background-color: ${(props) =>
        (props.type ? color[props.type] : color.white)};
    color: ${(props) =>
        (props.type ? color.white : color["primary"])};
    font-size: 1rem;
    margin: 1rem;
    padding: 0.25rem 1rem;
    border: 2px solid ${(props) =>
        (props.type ? color[props.type] : color.white)};
    border-radius: 5px;
    &:hover {
        color: ${(props) =>
        (props.type ? color[props.type] : color.white)};
        background-color: ${(props) =>
        (props.type ? color.white : color.primary)};
        border-color: ${(props) =>
        (props.type ? color[props.type] : color.primary)};
    }
`

// Demo 3
export const LemonButton = styled(NormalButton)`
    background-color: ${(props) =>
        props.primary ? lightningColor.primary : lightningColor.secondary};
    color: ${(props) =>
        !props.primary ? lightningColor.primary : lightningColor.secondary} ;  
    border: 2px solid ${(props) =>
        !props.primary ? lightningColor.primary : lightningColor.secondary};    
    &:hover {
        color: ${(props) =>
            props.primary ? lightningColor.primary : lightningColor.secondary};
        background-color: ${(props) =>
            !props.primary ? lightningColor.primary : lightningColor.secondary};
        border-color: ${(props) =>
            props.primary ? lightningColor.primary : lightningColor.secondary};
    }
`;

    // Demo 3.2
export const TomatoButton = styled(NormalButton)`
    background-color: ${(props) =>
        props.primary ? tomatoColor.primary : tomatoColor.secondary};
    color: ${(props) =>
        !props.primary ? tomatoColor.primary : tomatoColor.secondary} ;  
    border: 2px solid ${(props) =>
        !props.primary ? tomatoColor.primary : tomatoColor.secondary};    
    &:hover {
        color: ${(props) =>
            props.primary ? tomatoColor.primary : tomatoColor.secondary};
        background-color: ${(props) =>
            !props.primary ? tomatoColor.primary : tomatoColor.secondary};
        border-color: ${(props) =>
            props.primary ? tomatoColor.primary : tomatoColor.secondary};
    }
`;





// Demo 1
export const BlockTitle = styled.h3`
color: red
`