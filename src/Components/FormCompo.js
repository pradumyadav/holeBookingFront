

      export default function FormCompo (){
            return(
                <>
                <div className="form_Parent">

                    <div className="form_Subparent">

                        <div className="form_Left">
                            <div className="form_left_Child">
                            <input className="input1" type="date" required placeholder="DD MMMM YYYY"/><br/>
                            <input className="input1" type ="number" placeholder="Slots*" required/>
                            </div>
                            
                        </div>
                        <div className="form_Right">
                            <div className="rupee_Div ">₹ 0<p className="p-2">*inclusive of all taxes</p></div>
                            <input className="input2" type="number" placeholder="No. of person*" />
                            <button className="btn4">Next</button>
                        </div>
                    </div>
                </div>
                </>
            )
        }