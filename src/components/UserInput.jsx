export default function UserInput({ userInput, onChange }) {
    function handleChange(event, inputIdentifier) {
        onChange(inputIdentifier, event.target.value)
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        value={userInput.initialInvestment}
                        onChange={(e) => handleChange(e, "initialInvestment")}
                    />
                </p>

                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        value={userInput.annualInvestment}
                        onChange={(e) => handleChange(e, "annualInvestment")}
                    />
                </p>
            </div>

            <div className="input-group">
                <p>
                    <label>Expected Return (%)</label>
                    <input
                        type="number"
                        value={userInput.expectedReturn}
                        onChange={(e) => handleChange(e, "expectedReturn")}
                    />
                </p>

                <p>
                    <label>Duration (Years)</label>
                    <input
                        type="number"
                        value={userInput.duration}
                        onChange={(e) => handleChange(e, "duration")}
                    />
                </p>
            </div>
        </section>
    )
}
