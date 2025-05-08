import React from 'react'
import { Container } from '../components/Container'
import { Text } from '../components/Text'
import { FaInfoCircle, FaShieldAlt, FaUsers } from 'react-icons/fa'

export const Blog = () => {
  return (
    <div className="min-h-screen bg-black py-12">
      <Container>
        <div className="flex items-center mb-8">
          <FaInfoCircle className="text-[#00FF00] text-4xl mr-4" />
          <Text as="h1" size="xlarge" color="accent" className="font-bold">
            Информация
          </Text>
        </div>
        
        <div className="space-y-8">
          <div className="bg-gray-800 p-6 rounded-lg hover:border-[#00FF00] border border-gray-800 transition-all">
            <div className="flex items-center mb-4">
              <FaUsers className="text-[#00FF00] text-2xl mr-3" />
              <Text as="h2" size="large" color="accent" className="font-bold">
                Как выбрать идеального друга для аренды
              </Text>
            </div>
            <Text>
              В нашем сервисе вы можете найти друзей с различными интересами. 
              Мы поможем подобрать человека, с которым вам будет комфортно общаться.
            </Text>
            <div className="mt-4">
              <div className="w-full h-48 bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-[#00FF00]/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[#00FF00] text-8xl">👥</div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg hover:border-[#00FF00] border border-gray-800 transition-all">
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-[#00FF00] text-2xl mr-3" />
              <Text as="h2" size="large" color="accent" className="font-bold">
                Правила безопасного общения
              </Text>
            </div>
            <Text>
              Все наши друзья проходят проверку. Мы рекомендуем первые встречи 
              проводить в публичных местах и соблюдать обычные меры предосторожности.
            </Text>
            <div className="mt-4">
              <div className="w-full h-48 bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-[#00FF00]/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[#00FF00] text-8xl">🛡️</div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-gray-900 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}