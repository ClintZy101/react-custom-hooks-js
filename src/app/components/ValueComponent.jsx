'use client'
import React from 'react'
import useCustomOne from '../useCustomHooks/useHookOne'

export default function ValueComponent() {
  const value=  useCustomOne()
  console.log(value)
  return (
    <div>ValueComponent: {value}</div>
  )
}
