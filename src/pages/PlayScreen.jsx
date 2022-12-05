import Guy from '../components/Guy';
import LeChuck from '../components/LeChuck';
import IconMenu from '../components/IconMenu';
import TextBox from '../components/TextBox';
import DialogueBox from '../components/DialogueBox';


const PlayScreen = () => {
    return (
        <>
            <IconMenu/>
            <div className='wrapper'>
                <div className='character-section'>
                    <TextBox/>
                    <div className='sprites'>
                        <Guy/>
                        <LeChuck/>
                    </div>
                </div>
                <DialogueBox/>
            </div>
        </>
    )
}

export default PlayScreen;

// Pages 
//     PlayScreen 
//         TextBox 
//         Guy 
//         LeChuck 
//         DialogueBox 