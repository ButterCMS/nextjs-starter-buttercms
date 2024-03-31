import parse from 'html-react-parser';

export default function TestComponent({ fields }) {
    const {header, copy, icons = []} = fields
	return (
        <section className="cta-section py-5">
			<div className="container">
				<div className="testrow">
					<div className="testcol">
						<div className="cta-content-wrapper">
							<div className="section-title">
                                <div className='row align-items-center'>
                                    <div className='col-sm-12 col-lg-6'>
                                        <h2 className="mb-20">{header}</h2>
                                        {parse(copy)}
                                    </div>
                                    <div className='col-sm-12 col-lg-6 row'>
                                        {icons.map((iconS, index)=>{
                                            return(
                                                <div className='col-lg-4' key={index}>
                                                    <img src={iconS.icon} alt="Test icon"></img>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section >
    );
}