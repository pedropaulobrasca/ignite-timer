import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import { CountdownContainer, Separator } from './styles'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    if (activeCycle) {
      const interval = setInterval(() => {
        const amountSecondsPassed = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (amountSecondsPassed >= totalSeconds) {
          markCycleAsFinished()
          setSecondsPassed(0)
          clearInterval(interval)
        } else {
          setSecondsPassed(amountSecondsPassed)
        }
      }, 1000)

      return () => {
        clearInterval(interval)
      }
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCycleAsFinished,
    setSecondsPassed,
  ])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutesAmountFormatted = String(minutesAmount).padStart(2, '0')
  const secondsAmountFormatted = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutesAmountFormatted}:${secondsAmountFormatted} - Pomodoro`
    }
  }, [minutesAmountFormatted, secondsAmountFormatted, activeCycle])

  return (
    <CountdownContainer>
      <span>{minutesAmountFormatted[0]}</span>
      <span>{minutesAmountFormatted[1]}</span>
      <Separator>:</Separator>
      <span>{secondsAmountFormatted[0]}</span>
      <span>{secondsAmountFormatted[1]}</span>
    </CountdownContainer>
  )
}
