import { useRef, useState } from 'react'
import Container from '@/components/container'
import Heading from '@/components/heading'
import Layout from '@/components/layout'
import Head from 'next/head'
import { Button } from '@/components/button'
import { HeroText } from '@/components/typography'
import { Duration } from 'luxon';

export default function Index() {
  const [goal, setGoal] = useState('');
  const [timer, setTimer] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const interval = useRef(0);

  function updateGoal({ target: { value }}) {
    setGoal(value);
  }

  function startTimer() {
    setIsActive(true);
    interval.current = setInterval(() => {
      if (timer >= 0) {
        setTimer(timer => timer - 1);
      } else {
        setIsActive(false);
        clearInterval(interval.current);
      }
    }, 1000);
  }

  function stopTimer() {
    setIsActive(false);
    clearInterval(interval.current);
  }

  const dur = Duration.fromObject({ seconds: timer });
  const displayTime = dur.toFormat('m:ss');

  return (
    <Layout>
      <Head>
        <title>{displayTime} - Pomo-Tracker</title>
      </Head>
      <Container sm>
        <Heading mainText="Pomo-Tracker" />
        <HeroText>{displayTime}</HeroText>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-5 md:gap-x-5 mb-32">
          <input className="col-span-3" onChange={updateGoal} value={goal} placeholder='What is your goal for the next 25 mins?' type="text" />
          <Button onClick={isActive ? stopTimer : startTimer}>{isActive ? 'Stop' : 'Start'}</Button>
        </div>
      </Container>
    </Layout>
  )
}
