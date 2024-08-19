import { useRef, useState } from 'react';
import './styles/Home.css'

export const Home = () => {
    //vars that control whether a section is hidden
    const [toLearnStatus, setToLearnStatus] = useState(false);
    const [progressStatus, setProgressStatus] = useState(false);
    const [learnedStatus, setLearnedStatus] = useState(false);
    const [addItemStatus, setAddItemStatus] = useState(false);
    const [inputMethodStatus, setInputMethodStatus] = useState(false);
    const [inputType, setInputType] = useState(false);

    //toggles which section is visible
    const showItems = (num) => {
        switch (num) {
            case 1:
                setProgressStatus(false);
                setLearnedStatus(false);
                setToLearnStatus(true);
                setAddItemStatus(false);
                break;
            case 2: 
                setToLearnStatus(false);
                setLearnedStatus(false);
                setProgressStatus(true);
                setAddItemStatus(false);
                break;
            case 3:
                setToLearnStatus(false);
                setProgressStatus(false);
                setLearnedStatus(true);
                setAddItemStatus(false);
                break;
            case 4:
                setAddItemStatus(!addItemStatus);
                setToLearnStatus(!toLearnStatus);
            default:
                break;
        }
    }
    //the sections that become visible when their button is clicked
    const songsToLearn = () => {
        return(
            <>
            <div className='toLearn'>
                Maps - Maroon 5 <br />
                Smells Like Teen Spirit - Nirvana <br />
                The Remedy - Polaris <br />
                <button onClick={() => showItems(4)}>Add Item</button>
            </div>
            </>
        );
    }
    const songsInProgress = () => {
        return(
            <div>
                Doomsday - Stand Atlantic <br />
                Flying Whales - Gojira <br />
                Solway Firth - Slipknot <br />
            </div>
        );
    }
    const songsLearned = () => {
        return(
            <div>
                Rein Raus - Rammstein <br />
                Hate/Love -Electric Callboy <br />
                Aru Machi No Gunjou(A Town in Blue) - Asian Kung-Fu Generation <br />
            </div>
        );
    }
    const changeInputType = (event) => {
        setInputType(event.target.value);
        setInputMethodStatus(true);
    }
    const AddItem = () => {
        return(
            <div className='addItem'>
                <label htmlFor="">Enter the Title of Song</label> <br />
                <input type="text" placeholder='Song Name'/> <br />
                <label htmlFor="">Choose if you have the tab file or a link to a website that has the tab:</label> <br />
                <select value={inputType} onChange={changeInputType}>
                    <option value="">--Choose method--</option>
                    <option value='file'>File</option>
                    <option value='url'>Url/Link</option>
                </select> <br />     
                {inputMethodStatus && enterInput()}           
                <input type="button" value="Submit" onClick={changeInputType}/>
            </div>
        );
    }

    const enterInput = () => {
        if (inputType === 'file') {
            return (
                <div>
                    <label htmlFor="">Submit tab file from your device</label>
                    <input type="file" name="" id="" />
                </div>
            );
        }
        else if (inputType === 'url'){
            return (
                <div>
                    <label htmlFor="">Enter url/link</label>
                    <input type="url" name="" id="" />
                </div>
            );
        }
    }

    return(
        <>
            <h1>Tab Station</h1>
            <div className="sections">
                <button onClick={() => showItems(1)} className='sectionTitle'>Songs to Learn</button>
                <button onClick={() => showItems(2)} className='sectionTitle'>Songs in Progress</button>
                <button onClick={() => showItems(3)} className='sectionTitle'>Songs Learned</button>
            </div>
            <div className="tolearn">
                {toLearnStatus && songsToLearn()}
                {addItemStatus && AddItem()}
            </div>
            <div className="current">
                {progressStatus && songsInProgress()}
            </div>
            <div className="learned">
                {learnedStatus && songsLearned()}
            </div>
        </>
    );
}