import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { useNavigate } from 'react-router-dom'
import { goToBack } from '../../Routes/coordinator'
import { ContainerHeader, Title } from './styled'

const Header = ({title, back}) => {
    const navigate = useNavigate()
    return <ContainerHeader>
        { back && <ArrowBackIosNewIcon onClick={() => goToBack(navigate)} />}
        <Title>{title}</Title>
    </ContainerHeader>
}

export default Header