import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { 
    BlockTitle, 
    NormalButton, 
    LemonButton,
    TextDetail, 
    TomatoButton, 
    ThemeButton, 
    buttonTheme, 
    buttonDarkTheme,
    advanceTheme,
    AdvanceButton,
    investTheme,
    Rotate,
    Link,
    Label,
    Icon} from './StyledComponents'

const StyledComponents = () => {
    const [isDarkTheme, setDarkTheme] = useState(false)
  return (
    <>  

        {/* Demo 7 - hovering parent changes child's style */}
        <BlockTitle>Demo 7 - hovering parent changes child's style</BlockTitle>
        <Link href="#">
            <Icon viewBox="0 0 20 20">
                <path d="M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z" />
            </Icon>
            <Label>hovering parent changes child's style</Label>
        </Link>

        {/* Demo6 = animation style */}
        <hr />
        <BlockTitle>Demo 6 - animation style</BlockTitle>
        <Rotate>&lt;💅🏾 &gt;</Rotate>

        {/* Demo 5 - Nested theme */}
        <hr/>
        <BlockTitle>Demo 5 - Nested theme</BlockTitle>
        <ThemeProvider theme={advanceTheme}>
            <AdvanceButton>Default advance</AdvanceButton>
            <ThemeProvider theme={investTheme}>
                <AdvanceButton>Invest advance</AdvanceButton>
            </ThemeProvider>
        </ThemeProvider>



        {/* Demo 4 */}
        <hr />
        <BlockTitle>Demo 4 - theme button</BlockTitle>
        <div>
            <button
                className='btn btn-success'
                onClick={() => setDarkTheme((prevState) => !prevState)}
            >
                Toggle theme
            </button>
        </div>
        <ThemeButton>Theme normal</ThemeButton>
        <ThemeProvider theme={!isDarkTheme ? buttonTheme : buttonDarkTheme}>
            <ThemeButton>Theme color</ThemeButton>
            <TextDetail>Lorem ipsum dolor sit.</TextDetail>
        </ThemeProvider>


        {/* Demo 3.2 */}
        <hr />
        <BlockTitle>Demo 3 - styled custom button</BlockTitle>
        <TomatoButton primary>Yellow</TomatoButton>
        <TomatoButton>Black</TomatoButton>

        {/* Demo 3 */}
        <hr />
        <BlockTitle>Demo 3 - styled custom button</BlockTitle>
        <LemonButton primary>Yellow</LemonButton>
        <LemonButton>Black</LemonButton>


        {/* Demo 2 */}
        <hr />
        <BlockTitle>Demo 2 - styled button</BlockTitle>
        <NormalButton type={"primary"}>Normal</NormalButton>
        <NormalButton>Colored</NormalButton>
        <NormalButton type={"dark"}>Dark</NormalButton>


        <hr />
        <BlockTitle>Demo 1</BlockTitle>
        {/* Styled components */}
        <Wrapper>
            <PageTitle>
                Welcome to <strong>Styled inline Component</strong> Lib
            </PageTitle>
        </Wrapper>

    
        {/* JSX inline styles */}
        <section style={{ padding: "4rem", backgroundColor: "papayawhip"}}>
            <h2 style={{fontSize: "1.5rem", textAlign: "center", color: "#bf4f74"}}>
                Welcome to <strong>Styled inline Component</strong> Lib
            </h2>
        </section>
    </>
  )
}

export default StyledComponents

const Wrapper = styled.section`
padding: 4rem;
background-color: papayawhip;
`

const PageTitle = styled.h2`
font-size: 1.5rem;
text-align: center;
color: #bf4f74
`
