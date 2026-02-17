import { formatter } from '../util/investment'

export default function Results({ results, initialInvestment }) {
    if (results.length === 0) {
        return <p className="center">No investment calculated yet.</p>
    }

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map((yearData) => {
                    const investedCapital =
                        initialInvestment + yearData.annualInvestment * yearData.year

                    const totalInterest =
                        yearData.valueEndOfYear - investedCapital

                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(investedCapital)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
