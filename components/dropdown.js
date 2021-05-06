import {useState} from 'react'
import styles from '../styles/components/dropdown.module.scss'

function Dropdown({title, items = [], multiSelect = false}) {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);

    function handleOnClick(item) {
        if(!selection.some(current => current.id === item.id)) {
            if(!multiSelect) {
                setSelection([item]);
            } else if (multiSelect) {
                setSelection([...selection, item]);
            }
        } else {
            let selectionAfterRemoval = selection;
            selectionAfterRemoval = selectionAfterRemoval.filter(
                current => current.id !== item.id
            );
            setSelection([...selectionAfterRemoval]);
        }
        
        //PUT ACTUAL FILTER HERE
        console.log(selection);
    }

    function isItemInSelction(item) {
        if(selection.find(current => current.id === item.id))
            return true;
        return false;
    }

    return (
        <div className={styles["wrapper"]}>
            <div
                tabIndex={0}
                className={styles["header"]}
                role="button"
                onKeyPress={() => toggle(!open)}
                onClick={() => toggle(!open)}
            >
                <div className={styles["title"]}>
                    <p>{title}</p>
                </div>
                <div className={styles["action"]}>
                    <p>{open ? 'Close' : 'Open'}</p>
                </div>
            </div>
            {open && (
                <ul className={styles["list"]}>
                    {items.map(item=>(
                        <li className={styles["list-item"]} key={item.id}>
                            <button type="button" onClick={() => handleOnClick(item)}>
                                <span>{item.value}</span>
                                <span>{isItemInSelction(item) && 'Selected'}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;