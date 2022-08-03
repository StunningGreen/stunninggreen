import React from 'react'
import { calculateCredit, myRating, getCredits, buildingAreaMock, professionalMock, companyMock, finalEmissionsMock } from '../data/ProjectA'

export default function Dashboard() {

  const dashboardIcon = "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4";

  return (

    <div class="flex bg-gray-100 rounded-xl m-3 shadow-xl mb-20">
      <div class="flex px-16 space-y-16 overflow-hidden m-3 pb-4 flex-col items-center justify-center rounded-md  bg-green-700 shadow-lg">
        <div class="flex items-center justify-center p-4 shadow-lg mt-2">
          <h1 class="text-white font-bold mr-2 cursor-pointer">Projects</h1>
        </div>
        <ul>
          <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={dashboardIcon} /></svg
            ><a href="">Project 1</a>
          </li>
          <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={dashboardIcon} /></svg
            ><a href="">Project 2</a>
          </li>
          <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={dashboardIcon} /></svg
            ><a href="">Project 3</a>
          </li>
          <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={dashboardIcon} /></svg
            ><a href="">Project 4</a>
          </li>
          <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={dashboardIcon} /></svg
            ><a href="">Project 5</a>
          </li>
        
          <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="round" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={dashboardIcon} /></svg
            ><a href="">Project 6</a>
          </li>
        </ul>
      </div>
      <div class="flex-col bg-indigo-50 w-full ml-4 pr-6">
        <div class="flex justify-between p-4 bg-white mt-3 rounded-xl shadow-lg">
          <h1 class="text-xl font-bold text-gray-700">Welcome {companyMock.name}</h1>
          <p class="text-md font-italic text-gray-500">Hi {professionalMock.firstName + ' ' + professionalMock.lastName} </p>
          <div class="flex justify-between w-2/5">
            <div class="flex items-center border-2 p-2 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Search" class="ml-2 outline-none w-full" />
            </div>
            <div class="flex items-center space-x-6 pr-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 cursor-pointer text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <img src="https://i.imgur.com/iH7hkQb.png" alt="" class="cursor-pointer" />
            </div>
          </div>
        </div>
        <div class="flex justify-between mt-4 space-x-4 s">
          <div class="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around">
            <img src="https://i.imgur.com/VHc5SJE.png" alt="" />
            <div class="text-center">
              <h1 class="text-4xl font-bold text-green-500">{myRating}</h1>
              <span class="text-gray-500">Rating</span>
            </div>
          </div>
          <div class="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around">
            <img src="https://i.imgur.com/Qnmqkil.png" alt="" />
            <div class="text-center">
              <h1 class="text-4xl font-bold text-gray-800">{getCredits}</h1>
              <span class="text-gray-500">Credits</span>
            </div>
          </div>
          <div class="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around">
            <img src="https://i.imgur.com/dJeEVcO.png" alt="" />
            <div class="text-center">
              <h1 class="text-4xl font-bold text-gray-800">{calculateCredit}</h1>
              <span class="text-gray-500">Revenue</span>
            </div>
          </div>
        </div>
        <div class="flex space-x-4">
          <div class="justify-between rounded-xl mt-4 p-4 bg-white shadow-lg">
            <h1 class="text-xl font-bold text-gray-800 mt-4">Today’s Status</h1>
            <div class="flex justify-between space-x-4 text-center mt-6">
              <div class="bg-indigo-50 rounded-xl p-10">
                <h3 class="text-xl font-bold text-green-800">{buildingAreaMock}</h3>
                <span>Total Building Area</span>
              </div>
              <div class="bg-indigo-50 rounded-xl p-10">
                <h3 class="text-xl font-bold text-green-800">{finalEmissionsMock.energyConsumption}</h3>
                <span>Final Emissions Number</span>
              </div>
              <div class="bg-indigo-50 rounded-xl p-10">
                <h3 class="text-xl font-bold text-green-800">30</h3>
                <span>Totals Session</span>
              </div>
            </div>
          </div>
          <div class="justify-between rounded-xl mt-4 p-4 bg-white shadow-lg ">
            <h1 class="text-xl font-bold text-gray-800 mt-4">Energy Status</h1>
            <div class="flex justify-between space-x-4 text-center mt-6">
              <div class="bg-indigo-50 rounded-xl p-10">
                <h3 class="text-xl font-bold text-green-800">{finalEmissionsMock.waterRecycling}</h3>
                <span>Watter Recycling</span>
              </div>
              <div class="bg-indigo-50 rounded-xl p-10">
                <h3 class="text-xl font-bold text-green-800">{finalEmissionsMock.energyConsumption}</h3>
                <span>Energy Consumption</span>
              </div>
              <div class="bg-indigo-50 rounded-xl p-10">
                <h3 class="text-xl font-bold text-green-800">{finalEmissionsMock.renewablEnergyProduction}</h3>
                <span>Renewable Energy Production</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
