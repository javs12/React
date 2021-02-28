import React, { useState, useEffect } from 'react';
import Question from './components/Quetion';
import Form from './components/Form';
import Listado from './components/Listado';
import ControlBudget from './components/BudgetControl';

function App() {
    const [budget, saveBudget] = useState(0);
    const [remaining, saveRemaining] = useState(0);
    const [showQuestion, updateQuestion] = useState(true);
    const [expends, saveExpends] = useState([]);
    const [expend, saveExpend] = useState({});
    const [createExpend, saveCreatedExpend] = useState(false);

    useEffect(() => {
        if (createExpend) {
            saveExpends([
                ...expends,
                expend
            ]);

            const remainingBudget = remaining - expend.quantity;
            saveRemaining(remainingBudget);
        }

        saveCreatedExpend(false);
    }, [expend, remaining, expends, createExpend]);

    return (
        <div className="container">
            <header>
                <h1>Gasto Semanal</h1>
                <div className="contenido-principal contenido">
                    {showQuestion
                        ? (
                            <Question
                                saveBudget={saveBudget}
                                saveRemaining={saveRemaining}
                                updateQuestion={updateQuestion}
                            />
                        )
                        : (
                            <div className="row">
                                <div className="one-half column">
                                    <Form
                                        saveExpend={saveExpend}
                                        saveCreatedExpend={saveCreatedExpend}
                                    />
                                </div>
                                <div className="one-half column">
                                    <Listado
                                        expends={expends}
                                    />
                                    <ControlBudget
                                        budget={budget}
                                        remaining={remaining}
                                    />
                                </div>
                            </div>
                        )}
                </div>
            </header>
        </div>
    );
}
export default App;
