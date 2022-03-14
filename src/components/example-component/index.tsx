import * as S from './styles'

const ExampleComponent = ({ title = 'Boilerplate React' }) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
)

export default ExampleComponent
