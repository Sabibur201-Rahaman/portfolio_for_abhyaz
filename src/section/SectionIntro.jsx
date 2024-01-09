import styled,{css} from 'styled-components'

const SectionIntro=styled.section`
h2{
  color: #413d4b;
  font-family: 'Playfair Display', serif;
font-size: 25px;
font-weight: bold;
text-transform: uppercase;
margin-bottom: 0 !important;
padding-bottom: 30px;
${props=>props.about && css`color:red;
`}
}

p{
  color: #413d4b;
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 0 !important;
  padding-bottom: 30px;
}
`
export default SectionIntro