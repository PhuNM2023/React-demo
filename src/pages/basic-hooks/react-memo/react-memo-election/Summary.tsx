
import React, { useEffect } from 'react'
import styles from './Summary.module.css'
import { ElectionState } from './Election.model';

interface SummaryProps {
    state?: ElectionState;
}

const Summary = (props: SummaryProps) => {
  const { state} = props
  console.log("summary rerender");
  useEffect(() => {
    console.log("Summary props changed", props);
  }, [props])

  return (
    <div className={styles.summary}>
        <span>Summary</span>
        <h2>State name: {state?.stateName}</h2>
        <p>
            Number of electoral votes"
            <span className={styles.output}>{state?.electoralVotes}</span>
        </p>
        {state?.candidates?.map((candidate) =>(
            <p key={candidate.id}>
                <span>Number vote for {candidate.fullName}</span>
                <span className={styles.output}>{candidate.vote}</span>
            </p>
        ))}
    </div>
  )
}

export default React.memo(Summary, (prevProps, nextProps) => {
    return prevProps.state?.id === nextProps.state?.id;
})