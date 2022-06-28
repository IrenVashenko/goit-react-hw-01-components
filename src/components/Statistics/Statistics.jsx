import { Box } from 'components/Box/Box'
import { Title, StatList, StatItem, Label, Percentage } from './Statistics.style'

export const Statistics = ({ title, stats }) => {
    return (
        <Box
            maxWidth="400px"
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            as="section"
            mt="70px"
            mb="70px"
            mr="auto"
            ml="auto"
            borderRadius="2px"
            pt="15px"
        >
            <Title>{title}</Title>
            <StatList>
                {stats.map(stat => (
                    <StatItem key={stat.id}>
                        <Label>{stat.label}</Label>
                        <Percentage>{stat.percentage}</Percentage>
                    </StatItem>
                ))}
            </StatList>
        </Box>
    )
}