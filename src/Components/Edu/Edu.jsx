import './Edu.css'

const Edu = () => {
    return (
        <div className='edu'>
            <div className='edu-title'>
                <h1>Educational Background</h1>
                <div className="edu-level">
                    <div className="edu-lvl"><p>Primary Education (G1): Apelo Cruz Elementary School (2010-2011)</p><hr style={{width:"100%"}}/></div>
                    <div className="edu-lvl"><p>Primary Education (G2-G6): Timoteo Paez Elementary School (2011-2016)</p><hr style={{width:"100%"}}/></div>
                    <div className="edu-lvl"><p>Secondary Education (JHS): Pasay City East High School (2016-2020)</p><hr style={{width:"100%"}} /></div>
                    <div className="edu-lvl"><p>Secondary Education (SHS): Emilio Aguinaldo College Manila (2020-2022)</p><hr style={{width:"100%"}} /></div>
                    <div className="edu-lvl"><p>Tertiary Education:Technological Institute of the Philippines (2022-Present)</p><hr style={{width:"100%"}} /></div>
                </div>
            </div>
        </div>
    )
}

export default Edu