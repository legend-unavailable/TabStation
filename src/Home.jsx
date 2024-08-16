import { useState } from 'react';
import './styles/Home.css'

export const Home = () => {
    //vars that control whether a section is hidden
    const [toLearnStatus, setToLearnStatus] = useState(false);
    const [progressStatus, setProgressStatus] = useState(false);
    const [learnedStatus, setLearnedStatus] = useState(false);
    const [addItemStatus, setAddItemStatus] = useState(false);

    //toggles which section is visible
    const showItems = (num) => {
        switch (num) {
            case 1:
                setProgressStatus(false);
                setLearnedStatus(false);
                setToLearnStatus(true);
                break;
            case 2: 
                setToLearnStatus(false);
                setLearnedStatus(false);
                setProgressStatus(true);
                break;
            case 3:
                setToLearnStatus(false);
                setProgressStatus(false);
                setLearnedStatus(true);
                break;
            case 4:
                setAddItemStatus(!addItemStatus);
            default:
                break;
        }
    }
    //the sections that become visible when their button is clicked
    const songsToLearn = () => {
        return(
            <div>
                Maps - Maroon 5 <br />
                Smells Like Teen Spirit - Nirvana <br />
                The Remedy - Polaris <br />
                <button onClick={() => showItems(4)}>Add Item</button>
            </div>
        );
    }
    const songsInProgress = () => {
        return(
            <div>
                Doomsday - Stand Atlantic <br />
                Flying Whales - Gojira <br />
                Solway Firth - Slipknot <br />
                <button>Add Item</button>
            </div>
        );
    }
    const songsLearned = () => {
        return(
            <div>
                Rein Raus - Rammstein <br />
                Hate/Love -Electric Callboy <br />
                Aru Machi No Gunjou(A Town in Blue) - Asian Kung-Fu Generation <br />
                <button>Add Item</button>
            </div>
        );
    }
    const addItemSection = () => {
        return(
            <>
            <label htmlFor="">Enter the Title of Song</label>
            <input type="text" placeholder='Song Name'/> <br />
            <label htmlFor="">Choose if you have the tab file or a link to a website that has the tab:</label>
            <select name="" id="">
                <option value="">--Choose method--</option>
                <option value="file">File</option>
                <option value="url">Url/Link</option>
            </select>
            
            <div>
                <img src="" alt="" />
                <input type="file" name="" id="" />
            </div>
            </>
        );
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
            </div>
            <div className="current">
                {progressStatus && songsInProgress()}
            </div>
            <div className="learned">
                {learnedStatus && songsLearned()}
            </div>
            {addItemStatus && addItemSection()}
        </>
    );
}