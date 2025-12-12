import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'Мария П.', avatar: '👩‍🏫', text: 'Кто-нибудь пробовал Учи.ру для устного счёта?', time: '10:30' },
    { id: 2, user: 'Анна К.', avatar: '👩‍💼', text: 'Да! Дети в восторге от игровых заданий', time: '10:32' },
    { id: 3, user: 'Олег В.', avatar: '👨‍🏫', text: 'А я использую Яндекс.Учебник, там отличная аналитика', time: '10:35' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const platforms = [
    {
      id: 1,
      name: 'Учи.ру',
      description: 'Интерактивные задачи по математике с игровыми элементами',
      rating: 4.8,
      reviews: 156,
      category: 'Интерактив',
      icon: '🎮',
      color: 'bg-purple-100 hover:bg-purple-200'
    },
    {
      id: 2,
      name: 'Яндекс.Учебник',
      description: 'Готовые задания и автоматическая проверка работ',
      rating: 4.6,
      reviews: 124,
      category: 'Автопроверка',
      icon: '📊',
      color: 'bg-orange-100 hover:bg-orange-200'
    },
    {
      id: 3,
      name: 'МЭШ',
      description: 'Московская электронная школа с богатой библиотекой',
      rating: 4.5,
      reviews: 98,
      category: 'Библиотека',
      icon: '📚',
      color: 'bg-blue-100 hover:bg-blue-200'
    },
    {
      id: 4,
      name: 'Skysmart',
      description: 'Онлайн-доска и готовые интерактивные упражнения',
      rating: 4.7,
      reviews: 87,
      category: 'Онлайн-доска',
      icon: '✏️',
      color: 'bg-pink-100 hover:bg-pink-200'
    },
    {
      id: 5,
      name: 'Фоксфорд',
      description: 'Видеоуроки и тренажёры для начальной школы',
      rating: 4.4,
      reviews: 72,
      category: 'Видеоуроки',
      icon: '🎬',
      color: 'bg-green-100 hover:bg-green-200'
    },
    {
      id: 6,
      name: 'Wordwall',
      description: 'Создание собственных игр и викторин',
      rating: 4.9,
      reviews: 203,
      category: 'Конструктор',
      icon: '🎯',
      color: 'bg-yellow-100 hover:bg-yellow-200'
    }
  ];

  const resources = [
    {
      category: 'Устный счёт',
      items: ['Математические диктанты', 'Таблица умножения', 'Счёт в пределах 100'],
      icon: '🧮',
      color: 'from-purple-400 to-purple-600'
    },
    {
      category: 'Геометрия',
      items: ['Фигуры и формы', 'Периметр и площадь', 'Симметрия'],
      icon: '📐',
      color: 'from-orange-400 to-orange-600'
    },
    {
      category: 'Задачи',
      items: ['Текстовые задачи', 'Логические цепочки', 'Задачи на движение'],
      icon: '🧩',
      color: 'from-blue-400 to-blue-600'
    },
    {
      category: 'Игры',
      items: ['Математические квесты', 'Викторины', 'Соревнования'],
      icon: '🎲',
      color: 'from-pink-400 to-pink-600'
    }
  ];

  const sendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([
        ...chatMessages,
        {
          id: chatMessages.length + 1,
          user: 'Вы',
          avatar: '👤',
          text: newMessage,
          time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-pink-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 animate-fade-in">
              <div className="text-4xl animate-bounce-subtle">🚀</div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                  МатемаТика
                </h1>
                <p className="text-xs text-gray-600">Портал для учителей начальных классов</p>
              </div>
            </div>
            
            <div className="flex gap-2">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'platforms', label: 'Платформы', icon: 'Star' },
                { id: 'resources', label: 'Ресурсы', icon: 'Library' },
                { id: 'chat', label: 'Чат', icon: 'MessageCircle' }
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(item.id)}
                  className={`transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow-lg scale-105' 
                      : 'hover:scale-105'
                  }`}
                >
                  <Icon name={item.icon} className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 p-12 text-white shadow-2xl">
              <div className="relative z-10 max-w-3xl">
                <div className="mb-6 flex items-center gap-4">
                  <div className="text-7xl animate-float">🎨</div>
                  <div className="text-7xl animate-float" style={{ animationDelay: '0.5s' }}>📱</div>
                  <div className="text-7xl animate-float" style={{ animationDelay: '1s' }}>✨</div>
                </div>
                <h2 className="mb-4 text-5xl font-bold">
                  Добро пожаловать в мир цифровой математики!
                </h2>
                <p className="mb-6 text-xl text-white/90">
                  Откройте для себя лучшие платформы и ресурсы для обучения математике в начальной школе. 
                  Делитесь опытом с коллегами и находите вдохновение!
                </p>
                <div className="flex gap-4">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    onClick={() => setActiveSection('platforms')}
                    className="bg-white text-purple-600 hover:bg-white/90 shadow-lg"
                  >
                    <Icon name="Rocket" className="mr-2 h-5 w-5" />
                    Исследовать платформы
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => setActiveSection('chat')}
                    className="border-2 border-white text-white hover:bg-white/20"
                  >
                    <Icon name="Users" className="mr-2 h-5 w-5" />
                    Присоединиться к чату
                  </Button>
                </div>
              </div>
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
            </section>

            <section className="grid gap-6 md:grid-cols-3">
              <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="text-5xl mb-4 animate-bounce-subtle">⭐</div>
                  <CardTitle className="text-purple-600">156 платформ</CardTitle>
                  <CardDescription>С рейтингами и отзывами учителей</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="text-5xl mb-4 animate-bounce-subtle" style={{ animationDelay: '0.3s' }}>📚</div>
                  <CardTitle className="text-orange-600">420+ ресурсов</CardTitle>
                  <CardDescription>Готовые материалы для уроков</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="text-5xl mb-4 animate-bounce-subtle" style={{ animationDelay: '0.6s' }}>💬</div>
                  <CardTitle className="text-pink-600">Живое общение</CardTitle>
                  <CardDescription>Чат для обмена опытом</CardDescription>
                </CardHeader>
              </Card>
            </section>
          </div>
        )}

        {activeSection === 'platforms' && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                🎯 Каталог платформ
              </h2>
              <p className="text-gray-600 text-lg">
                Оценки и отзывы от учителей со всей страны
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {platforms.map((platform, index) => (
                <Card 
                  key={platform.id}
                  className={`${platform.color} border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer animate-scale-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-5xl animate-bounce-subtle">{platform.icon}</div>
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        ⭐ {platform.rating}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">{platform.name}</CardTitle>
                    <CardDescription className="text-base">{platform.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="font-medium">
                        {platform.category}
                      </Badge>
                      <span className="text-sm text-gray-600">
                        💬 {platform.reviews} отзывов
                      </span>
                    </div>
                    <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      <Icon name="Eye" className="mr-2 h-4 w-4" />
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'resources' && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                📚 Библиотека ресурсов
              </h2>
              <p className="text-gray-600 text-lg">
                Материалы по темам для уроков математики
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {resources.map((resource, index) => (
                <Card 
                  key={index}
                  className="border-2 border-purple-200 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${resource.color}`}></div>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-5xl animate-bounce-subtle">{resource.icon}</div>
                      <CardTitle className="text-2xl">{resource.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {resource.items.map((item, idx) => (
                        <li 
                          key={idx}
                          className="flex items-center gap-3 p-3 rounded-lg bg-white hover:bg-purple-50 transition-colors cursor-pointer"
                        >
                          <Icon name="CheckCircle2" className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Icon name="Download" className="mr-2 h-4 w-4" />
                      Скачать материалы
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'chat' && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                💬 Чат учителей
              </h2>
              <p className="text-gray-600 text-lg">
                Обсуждайте платформы, делитесь опытом и находите единомышленников
              </p>
            </div>

            <Card className="border-2 border-purple-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-purple-100 to-orange-100 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">👥</div>
                    <div>
                      <CardTitle>Общий чат</CardTitle>
                      <CardDescription>47 учителей онлайн</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 animate-pulse">
                    ● Активно
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                <ScrollArea className="h-[500px] p-6">
                  <div className="space-y-4">
                    {chatMessages.map((message, index) => (
                      <div 
                        key={message.id}
                        className={`flex items-start gap-3 p-4 rounded-2xl transition-all duration-300 hover:scale-102 animate-fade-in ${
                          message.user === 'Вы' 
                            ? 'bg-gradient-to-r from-purple-100 to-pink-100 ml-8' 
                            : 'bg-white shadow-sm mr-8'
                        }`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <Avatar className="h-12 w-12 border-2 border-white shadow-md">
                          <AvatarFallback className="text-2xl">{message.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-purple-600">{message.user}</span>
                            <span className="text-xs text-gray-500">{message.time}</span>
                          </div>
                          <p className="text-gray-700">{message.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                <div className="border-t p-4 bg-gradient-to-r from-purple-50 to-orange-50">
                  <div className="flex gap-3">
                    <Input
                      placeholder="Напишите сообщение..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      className="flex-1 border-2 border-purple-200 focus:border-purple-400"
                    />
                    <Button 
                      onClick={sendMessage}
                      className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600"
                    >
                      <Icon name="Send" className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    💡 Общайтесь уважительно и делитесь полезным опытом
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="mt-16 border-t border-purple-200 bg-white/80 backdrop-blur-lg py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-3xl">🚀</span>
            <span className="text-xl font-bold text-purple-600">МатемаТика</span>
          </div>
          <p className="text-gray-600">
            Портал для учителей начальных классов © 2024
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <Button variant="ghost" size="sm">
              <Icon name="Mail" className="mr-2 h-4 w-4" />
              Контакты
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="HelpCircle" className="mr-2 h-4 w-4" />
              Помощь
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Info" className="mr-2 h-4 w-4" />
              О проекте
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
