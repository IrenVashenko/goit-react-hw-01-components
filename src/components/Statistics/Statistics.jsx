import PropTypes from 'prop-types';
import { Title, StatList, StatItem, Label, Percentage, BoxCenter } from './Statistics.style'

export const Statistics = ({ title, stats }) => {
    return (
        <BoxCenter>
            <Title>{title}</Title>
            <StatList>
                {stats.map(stat => (
                    <StatItem key={stat.id}>
                        <Label>{stat.label}</Label>
                        <Percentage>{stat.percentage}</Percentage>
                    </StatItem>
                ))}
            </StatList>
        </BoxCenter>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.object,
};