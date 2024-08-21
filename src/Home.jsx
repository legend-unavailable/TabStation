import { useRef, useState } from 'react';
import './styles/Home.css'
import { songsToLearn as toLearn, songsInProgress as inProgress, songsLearned as learned} from './Songs';

export const Home = () => {
    //vars that control whether a section is hidden
    const [toLearnStatus, setToLearnStatus] = useState(false);
    const [progressStatus, setProgressStatus] = useState(false);
    const [learnedStatus, setLearnedStatus] = useState(false);
    const [addItemStatus, setAddItemStatus] = useState(false);
    const [inputMethodStatus, setInputMethodStatus] = useState(false);
    const [inputType, setInputType] = useState(false);
    const [toLearnArr, setToLearnArr] = useState([...toLearn]);

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
    const moveSong = (num) => {
       //fill out
    }
    //the sections that become visible when their button is clicked
    const songsToLearn = () => {
        let keyID = 0;
        const STL = toLearnArr.map(songs => {
            return(
                <>
                <li key={keyID++}>{songs.song} - {songs.artist} tabs {songs.tab}</li>
                <input type="button" value="Move Song" key='' onClick={moveSong(keyID)}/>
                <input type="button" value="Delete" key={keyID}/>
                <input type="button" value="Edit" key={keyID}/>
                </>)});
        return(
            <>
            <div className='toLearn'>
                {STL} <br />
                <button onClick={() => showItems(4)}>Add Item</button>
            </div>
            </>
        );
    }
    const songsInProgress = () => {
        let keyID = 0;
        const SIP = inProgress.map(songs => {
            return(
                <>
                <li key={keyID++}>{songs.song} - {songs.artist} tabs {songs.tab}</li>
                <input type="button" value="Move Song" key={keyID}/>
                <input type="button" value="Delete" key={keyID}/>
                <input type="button" value="Edit" key={keyID}/>
                <br />
                </>)});
        return(
            <div>
                {SIP}
            </div>
        );
    }
    const songsLearned = () => {
        let keyID = 0;
        const SL = learned.map(songs => {
            return(
                <>
                <li key={keyID++}>{songs.song} - {songs.artist} tabs {songs.tab}</li>
                <input type="button" value="Move Song" key={keyID}/>
                <input type="button" value="Delete" key={keyID}/>
                <input type="button" value="Edit" key={keyID}/>
                </>)});
        return(
            <div>
                {SL}
            </div>
        );
    }
    const changeInputType = (event) => {
        setInputType(event.target.value);
        setInputMethodStatus(true);
    }
    const addSong = (tab) => {
        const songName = document.getElementById('name').value;
        const bandName = document.getElementById('band').value;
        setToLearnArr([...toLearnArr, {song: songName, artist: bandName, tab: tab}]);
        showItems(4);
    }
    const AddItem = () => {
        return(
            <div className='addItem'>
                <label>Enter the Title of Song</label> <br />
                <input type="text" placeholder='Song Name' id='name'/> <br />
                <label>Enter the Name of the Artist/Band</label> <br />
                <input type="text" placeholder='Artist/Band' id='band'/> <br />
                <label>Choose if you have the tab file or a link to a website that has the tab:</label> <br />
                <select value={inputType} onChange={changeInputType}>
                    <option value="">--Choose method--</option>
                    <option value='file'>File</option>
                    <option value='url'>Url/Link</option>
                </select> <br />     
                {inputMethodStatus && enterInput()}
            </div>
        );
    }

    const enterInput = () => {
        if (inputType === 'file') {
            return (
                <div>
                    <label htmlFor="">Submit tab file from your device</label>
                    <input type="file" id="tab1"/>
                    <input type="button" value="Add Song" onClick={() => addSong(document.getElementById('tab1').value)}/>
                </div>
            );
        }
        else if (inputType === 'url'){
            return (
                <div>
                    <label htmlFor="">Enter url/link</label>
                    <input type="url" id="tab2" />
                    <input type="button" value="Add Song" onClick={() => addSong(document.getElementById('tab2').value)}/>
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