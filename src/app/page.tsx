'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../globalRedux/rootReducer';
import { decrement, increment } from '../globalRedux/modules/counter';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="bg-slate-300 container mx-auto h-full flex flex-col gap-4">
      <div>
        <p>{counter}</p>
        
        <Button onClick={() => dispatch(increment(1))}>Incrementar</Button>
        <Button onClick={() => dispatch(decrement(1))}>Decrementar</Button>
      </div>
      <Link href="/login">Login</Link>
    </div>
  );
}
