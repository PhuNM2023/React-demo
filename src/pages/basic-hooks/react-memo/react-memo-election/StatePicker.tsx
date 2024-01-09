import React, { ChangeEvent } from 'react';
import styles from './StatePicker.module.css'

interface StatePickerProps {
    options: any[];
    selectedId?: number;
    onSelectState: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const StatePicker = (props: StatePickerProps) => {
    const {options, selectedId, onSelectState} = props

  if(options.length === 0) {
    return <div>No data</div>
  }

  return (
    <div>
        <h2>Selected State:{selectedId}</h2>
        <select
            onChange={onSelectState}
            value={selectedId}
            className={styles.select}
            >
                {options.map((char) => (
                    <option value={char.id} key={char.id}>
                        {char.stateName}
                    </option>
                ))}

        </select>
    </div>
  )
}

export default StatePicker