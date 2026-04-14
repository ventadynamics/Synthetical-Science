import { useState } from 'react';
import AccessCodeModal from './components/AccessCodeModal';
import { useAccessControl } from './hooks/useAccessControl';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentTab, setCurrentTab] = useState('about');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  
  // Названия табов
  const tabNames: Record<string, string> = {
    about: 'О корпорации',
    research: 'Исследовательский отдел',
    documents: 'Документы',
    news: 'Последние новости',
    projects: 'Активные проекты',
    facilities: 'Инфраструктура',
    calendar: 'Календарь'
  };
  
  // Система контроля доступа
  const { isAuthenticated, showModal, handleAuthSuccess, handleAuthCancel } = useAccessControl(
    currentTab,
    currentPage,
    () => {
      // Callback для возврата на главную при отмене
      setCurrentTab('about');
      setCurrentPage('home');
    }
  );

  return (
    <div style={{
      backgroundColor: '#C0C0C0',
      minHeight: '100vh',
      padding: '0',
      margin: '0',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Centered 800px content area */}
      <div style={{
        width: '1200px',
        margin: '0 auto',
        backgroundColor: '#FFFFFF'
      }}>
        {/* Header */}
        <table width="1200" cellPadding="0" cellSpacing="0" border={0} style={{ backgroundColor: '#1A3A5C' }}>
          <tbody>
            <tr>
              <td style={{ padding: '15px 20px' }}>
                <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                  <tbody>
                    <tr>
                      <td style={{ verticalAlign: 'middle' }}>
                        {/* Logo */}
                        <img 
                          src="/SS_logo_transparent.png" 
                          alt="SSC Logo"
                          style={{
                            height: '80px',
                            width: 'auto',
                            marginRight: '8px',
                            verticalAlign: 'middle',
                            objectFit: 'contain'
                          }}
                        />
                        
                      </td>
                      <td style={{ textAlign: 'right', verticalAlign: 'middle' }}>
                        <span style={{
                          color: '#FFFFFF',
                          fontSize: '10px',
                          fontFamily: 'Arial, sans-serif'
                        }}>
                          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('portal'); }} style={{ color: '#FFFFFF', textDecoration: 'none', cursor: 'pointer' }}>Портал сотрудника</a>
                          {' | '}
                          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('contacts'); }} style={{ color: '#FFFFFF', textDecoration: 'none', cursor: 'pointer' }}>Контакты</a>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Navigation Bar */}
        <table width="1200" cellPadding="0" cellSpacing="0" border={0} style={{ backgroundColor: '#D4D0C8' }}>
          <tbody>
            <tr>
              {['about', 'research', 'news', 'projects', 'facilities', 'calendar'].map((tab) => (
                <td
                  key={tab}
                  onClick={() => { setCurrentTab(tab); setSelectedProject(null); setCurrentPage('home'); }}
                  style={{
                    padding: '8px 16px',
                    borderRight: '1px solid #808080',
                    backgroundColor: currentTab === tab && currentPage === 'home' ? '#FFFFFF' : '#D4D0C8',
                    fontWeight: currentTab === tab && currentPage === 'home' ? 'bold' : 'normal',
                    color: '#1A3A5C',
                    cursor: 'pointer',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px'
                  }}
                >
                  {tabNames[tab]}
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        {/* Main Content Area - Two Column Table */}
        <table width="1200" cellPadding="0" cellSpacing="0" border={0}>
          <tbody>
            <tr>
              {/* Left Sidebar - 180px */}
              <td width="180" style={{ backgroundColor: '#E8E8E8', verticalAlign: 'top', padding: '15px' }}>
                <div style={{
                  fontSize: '10px',
                  fontWeight: 'bold',
                  fontFamily: 'Arial, sans-serif',
                  marginBottom: '10px',
                  textTransform: 'uppercase'
                }}>НАВИГАЦИЯ</div>

                <div style={{ marginBottom: '15px' }}>
                  <a href="#" onClick={(e) => { e.preventDefault(); setCurrentTab('about'); setSelectedProject(null); setCurrentPage('home'); }} style={{
                    display: 'block',
                    color: currentTab === 'about' && currentPage === 'home' ? '#8B0000' : '#0000CC',
                    textDecoration: 'underline',
                    fontSize: '11px',
                    fontFamily: 'Arial, sans-serif',
                    marginBottom: '6px',
                    fontWeight: currentTab === 'about' && currentPage === 'home' ? 'bold' : 'normal',
                    cursor: 'pointer'
                  }}>О корпорации</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); setCurrentTab('research'); setSelectedProject(null); setCurrentPage('home'); }} style={{
                    display: 'block',
                    color: currentTab === 'research' && currentPage === 'home' ? '#8B0000' : '#0000CC',
                    textDecoration: 'underline',
                    fontSize: '11px',
                    fontFamily: 'Arial, sans-serif',
                    marginBottom: '6px',
                    fontWeight: currentTab === 'research' && currentPage === 'home' ? 'bold' : 'normal',
                    cursor: 'pointer'
                  }}>Исследовательский отдел</a>
                  {/* <a href="#" onClick={(e) => { e.preventDefault(); setCurrentTab('documents'); setSelectedProject(null); setCurrentPage('home'); }} style={{
                    display: 'block',
                    color: currentTab === 'documents' && currentPage === 'home' ? '#8B0000' : '#0000CC',
                    textDecoration: 'underline',
                    fontSize: '11px',
                    fontFamily: 'Arial, sans-serif',
                    marginBottom: '6px',
                    fontWeight: currentTab === 'documents' && currentPage === 'home' ? 'bold' : 'normal',
                    cursor: 'pointer'
                  }}>Документы</a> */}
                  <a href="#" onClick={(e) => { e.preventDefault(); setCurrentTab('news'); setSelectedProject(null); setCurrentPage('home'); }} style={{
                    display: 'block',
                    color: currentTab === 'news' && currentPage === 'home' ? '#8B0000' : '#0000CC',
                    textDecoration: 'underline',
                    fontSize: '11px',
                    fontFamily: 'Arial, sans-serif',
                    marginBottom: '6px',
                    fontWeight: currentTab === 'news' && currentPage === 'home' ? 'bold' : 'normal',
                    cursor: 'pointer'
                  }}>Последние новости</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); setCurrentTab('projects'); setSelectedProject(null); setCurrentPage('home'); }} style={{
                    display: 'block',
                    color: currentTab === 'projects' && currentPage === 'home' ? '#8B0000' : '#0000CC',
                    textDecoration: 'underline',
                    fontSize: '11px',
                    fontFamily: 'Arial, sans-serif',
                    marginBottom: '6px',
                    fontWeight: currentTab === 'projects' && currentPage === 'home' ? 'bold' : 'normal',
                    cursor: 'pointer'
                  }}>Активные проекты</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); setCurrentTab('facilities'); setSelectedProject(null); setCurrentPage('home'); }} style={{
                    display: 'block',
                    color: currentTab === 'facilities' && currentPage === 'home' ? '#8B0000' : '#0000CC',
                    textDecoration: 'underline',
                    fontSize: '11px',
                    fontFamily: 'Arial, sans-serif',
                    marginBottom: '6px',
                    fontWeight: currentTab === 'facilities' && currentPage === 'home' ? 'bold' : 'normal',
                    cursor: 'pointer'
                  }}>Инфраструктура</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); setCurrentTab('calendar'); setSelectedProject(null); setCurrentPage('home'); }} style={{
                    display: 'block',
                    color: currentTab === 'calendar' && currentPage === 'home' ? '#8B0000' : '#0000CC',
                    textDecoration: 'underline',
                    fontSize: '11px',
                    fontFamily: 'Arial, sans-serif',
                    marginBottom: '6px',
                    fontWeight: currentTab === 'calendar' && currentPage === 'home' ? 'bold' : 'normal',
                    cursor: 'pointer'
                  }}>Календарь</a>
                  <div style={{ height: '1px', backgroundColor: '#808080', margin: '10px 0' }}></div>
                  <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('portal'); }} style={{
                    display: 'block',
                    color: currentPage === 'portal' ? '#8B0000' : '#0000CC',
                    textDecoration: 'underline',
                    fontSize: '11px',
                    fontFamily: 'Arial, sans-serif',
                    marginBottom: '6px',
                    fontWeight: currentPage === 'portal' ? 'bold' : 'normal',
                    cursor: 'pointer'
                  }}>Портал сотрудника</a>
                </div>

                {/* Yellow warning box - только для авторизованных */}
                {sessionStorage.getItem('ssc_authenticated') === 'true' && (
                  <div style={{
                    backgroundColor: '#FFFF99',
                    border: '1px solid #000000',
                    padding: '8px',
                    fontSize: '10px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#000000'
                  }}>
                    <strong>ОБРАТИТЕ ВНИМАНИЕ:</strong> для доступа ко всем документам, помеченным как «Ограниченный доступ», требуется допуск 3-го уровня. Несанкционированный доступ запрещен.
                  </div>
                )}
              </td>

              {/* Main Content Area - Right Side */}
              <td style={{ backgroundColor: '#FFFFFF', verticalAlign: 'top', padding: '20px' }}>
                {/* Модальное окно для ввода кода доступа */}
                {showModal && <AccessCodeModal onSuccess={handleAuthSuccess} onCancel={handleAuthCancel} />}
                
                {/* Контент доступен только после авторизации */}
                {!isAuthenticated ? (
                  <div style={{
                    textAlign: 'center',
                    padding: '40px',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                    color: '#808080'
                  }}>
                    <div></div>
                  </div>
                ) : (
                  <>
                {currentPage === 'home' && (
                  <>
                    {currentTab === 'about' && (
                      <div>
                        <div style={{
                          fontSize: '14px',
                          fontWeight: 'bold',
                          fontFamily: 'Arial, sans-serif',
                          color: '#1A3A5C',
                          marginBottom: '5px'
                        }}>О корпорации Synthetical Science</div>
                        <hr style={{ border: 'none', borderTop: '1px solid #808080', marginBottom: '15px' }} />

                        <p style={{
                          fontSize: '12px',
                          fontFamily: 'Arial, sans-serif',
                          color: '#000000',
                          lineHeight: '1.5',
                          margin: '0 0 12px 0'
                        }}>
                          Synthetical Science — международная научно-исследовательская организация, основанная в 1962 году. Корпорация специализируется в области прикладной физики, материаловедения и смежных научных дисциплин. Объекты корпорации расположены в нескольких странах Европы и обеспечивают полный цикл исследовательской деятельности — от теоретических разработок до прикладных испытаний.
                        </p>

                        <p style={{
                          fontSize: '12px',
                          fontFamily: 'Arial, sans-serif',
                          color: '#000000',
                          lineHeight: '1.5',
                          margin: '0 0 12px 0'
                        }}>
                          Synthetical Science Corporation придерживается принципов научной независимости и операционной безопасности. Корпорация сотрудничает с ведущими академическими институтами и государственными структурами в рамках установленных соглашений о конфиденциальности.
                        </p>

                        <p style={{
                          fontSize: '12px',
                          fontFamily: 'Arial, sans-serif',
                          color: '#000000',
                          lineHeight: '1.5',
                          margin: '0 0 12px 0'
                        }}>
                          Штаб-квартира корпорации находится в Женеве, Швейцария.
                        </p>

                        <div style={{
                          fontSize: '14px',
                          fontWeight: 'bold',
                          fontFamily: 'Arial, sans-serif',
                          color: '#1A3A5C',
                          marginTop: '20px',
                          marginBottom: '5px'
                        }}>История корпорации</div>
                        <hr style={{ border: 'none', borderTop: '1px solid #808080', marginBottom: '15px' }} />

                        <table border={1} cellPadding={4} cellSpacing={0} style={{ borderColor: '#808080', width: '100%', marginBottom: '20px' }}>
                          <tbody>
                            <tr style={{ backgroundColor: '#C0C0C0' }}>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '100px' }}>Год</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Событие</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>1962</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Основание Synthetical Science Corporation в Женеве. Первоначальный штат — 12 научных сотрудников.</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>1964</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Открытие первого исследовательского объекта на территории Западной Европы.</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>1967</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Ввод в эксплуатацию НИЦ «Зарево», Острава, Чехословакия.</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>1971</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Подписание первого межправительственного соглашения о научном сотрудничестве.</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>1974</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Расширение исследовательской программы. Открытие лаборатории материаловедения.</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>1979</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Присвоение корпорации статуса международной научной организации.</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>1983</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Начало долгосрочной программы исследований в области квантовых систем.</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>1986</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Приостановка ряда программ в связи с пересмотром протоколов безопасности.</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>1989</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Возобновление полного операционного цикла. Расширение штата НИЦ «Зарево».</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>1991</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Реструктуризация корпорации в связи с изменением геополитической обстановки.</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>1995</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Запуск новой исследовательской программы. Модернизация оборудования НИЦ «Зарево».</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>1998</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Подписание соглашения о сотрудничестве с рядом европейских академических институтов.</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>2000</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>38-летие корпорации. Численность персонала превысила 400 сотрудников на всех объектах.</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>2001</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Начало реализации программы перспективных исследований. Гриф: ограниченный доступ.</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>2002</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Плановая сертификация всех объектов корпорации. Успешное прохождение внешнего аудита.</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>2003</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Продолжение исследовательской деятельности в штатном режиме.</td>
                            </tr>
                          </tbody>
                        </table>

                        

                        <div style={{
                          fontSize: '14px',
                          fontWeight: 'bold',
                          fontFamily: 'Arial, sans-serif',
                          color: '#1A3A5C',
                          marginTop: '20px',
                          marginBottom: '5px'
                        }}>Отраслевое партнерство</div>
                        <hr style={{ border: 'none', borderTop: '1px solid #808080', marginBottom: '15px' }} />

                        <p style={{
                          fontSize: '12px',
                          fontFamily: 'Arial, sans-serif',
                          color: '#000000',
                          lineHeight: '1.5',
                          margin: '0 0 8px 0'
                        }}>
                          Корпорация Synthetical Science осуществляет долгосрочное сотрудничество с рядом академических и промышленных организаций в рамках соглашений о конфиденциальности.
                        </p>

                        <p style={{
                          fontSize: '12px',
                          fontFamily: 'Arial, sans-serif',
                          color: '#000000',
                          lineHeight: '1.5',
                          margin: '0 0 12px 0'
                        }}>
                          Партнёры корпорации в области научного оборудования и материально-технического обеспечения:
                        </p>

                        <table border={1} cellPadding={6} cellSpacing={0} style={{ borderColor: '#808080', width: '100%', marginBottom: '15px' }}>
                          <tbody>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', verticalAlign: 'top', width: '200px' }}>
                                <strong>Macrohard GmbH</strong>
                              </td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', verticalAlign: 'top' }}>
                                Берлин. Поставка вычислительного оборудования и программного обеспечения для исследовательских объектов корпорации с 1998 года.
                              </td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', verticalAlign: 'top' }}>
                                <strong>Евроатом</strong>
                              </td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', verticalAlign: 'top' }}>
                                Брюссель. Консультационное сотрудничество в области радиационной безопасности.
                              </td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', verticalAlign: 'top' }}>
                                <strong>Институт прикладной физики</strong>
                              </td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', verticalAlign: 'top' }}>
                                Прага. Совместные исследовательские программы в области квантовых систем.
                              </td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', verticalAlign: 'top' }}>
                                <strong>[данные ограничены]</strong>
                              </td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', verticalAlign: 'top' }}>
                                Поставка специализированного оборудования для объектов уровня доступа 3 и выше.
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <p style={{
                          fontSize: '11px',
                          fontFamily: 'Arial, sans-serif',
                          color: '#666666',
                          lineHeight: '1.5',
                          margin: '0 0 8px 0'
                        }}>
                          Детали партнёрских соглашений не подлежат публичному раскрытию.
                        </p>

                        <div style={{
                          fontSize: '14px',
                          fontWeight: 'bold',
                          fontFamily: 'Arial, sans-serif',
                          color: '#1A3A5C',
                          marginTop: '20px',
                          marginBottom: '5px'
                        }}>Награды и признание</div>
                        <hr style={{ border: 'none', borderTop: '1px solid #808080', marginBottom: '15px' }} />

                        <table border={1} cellPadding={6} cellSpacing={0} style={{ borderColor: '#808080', width: '100%', marginBottom: '20px' }}>
                          <tbody>
                            <tr style={{ backgroundColor: '#C0C0C0' }}>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '80px' }}>Год</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Награда</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Организация</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>1979</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Сертификат научного совершенства</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Европейская федерация научных организаций</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>1984</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Премия за вклад в развитие прикладной физики</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Международный союз физиков</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>1991</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Благодарственное письмо за сотрудничество</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>1995</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Сертификат соответствия стандартам безопасности</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Независимый аудиторский комитет</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>1997</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Премия за научные достижения</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Чешская академия наук</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>2002</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Ведомственная награда за вклад в обеспечение режима безопасности</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Комитет государственной безопасности</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>2002</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Сертификат операционного совершенства</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Внутренний аудит Synthetical Science</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}

                    {currentTab === 'research' && (
                      <div>
                        <div style={{
                          fontSize: '14px',
                          fontWeight: 'bold',
                          fontFamily: 'Arial, sans-serif',
                          color: '#1A3A5C',
                          marginBottom: '5px'
                        }}>Исследовательский отдел</div>
                        <hr style={{ border: 'none', borderTop: '1px solid #808080', marginBottom: '15px' }} />

                        <p style={{
                          fontSize: '12px',
                          fontFamily: 'Arial, sans-serif',
                          color: '#000000',
                          lineHeight: '1.5',
                          margin: '0 0 12px 0'
                        }}>
                          НИЦ «Зарево» реализует научные программы по нескольким приоритетным направлениям в рамках долгосрочной исследовательской стратегии Synthetical Science. Подробная информация о текущих проектах доступна сотрудникам уровня допуска 2 и выше через портал сотрудников.
                        </p>

                      

                        <div style={{
                          fontSize: '14px',
                          fontWeight: 'bold',
                          fontFamily: 'Arial, sans-serif',
                          color: '#1A3A5C',
                          marginTop: '20px',
                          marginBottom: '5px'
                        }}>Направления исследований</div>
                        <hr style={{ border: 'none', borderTop: '1px solid #808080', marginBottom: '15px' }} />

                        <table border={1} cellPadding={4} cellSpacing={0} style={{ borderColor: '#808080', width: '100%', marginBottom: '20px' }}>
                          <tbody>
                            <tr style={{ backgroundColor: '#C0C0C0' }}>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '35%' }}>Направление</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '30%' }}>Руководитель</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '20%' }}>Активных проектов</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '15%' }}>Доступ</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Квантовые системы</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень 3</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Материаловедение</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>д-р Д. Гарай</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>4</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень 2</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Прикладная физика</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>д-р Е. Кралова</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>3</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень 2</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Вычислительные системы</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>д-р Т. Блага</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>2</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень 2</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень 3+</td>
                            </tr>
                          </tbody>
                        </table>

                        <div style={{
                          fontSize: '14px',
                          fontWeight: 'bold',
                          fontFamily: 'Arial, sans-serif',
                          color: '#1A3A5C',
                          marginTop: '20px',
                          marginBottom: '5px'
                        }}>Избранные публикации</div>
                        <hr style={{ border: 'none', borderTop: '1px solid #808080', marginBottom: '15px' }} />

                        <div style={{ marginBottom: '12px' }}>
                          <div style={{ fontSize: '12px', fontFamily: 'Arial, sans-serif', color: '#000000', fontWeight: 'bold' }}>
                            «Поведение кристаллических структур при воздействии нестандартных электромагнитных полей»
                          </div>
                          <div style={{ fontSize: '11px', fontFamily: 'Arial, sans-serif', color: '#808080' }}>
                            д-р Д. Гарай, д-р Е. Кралова — <i>Журнал прикладной физики</i>, т. 38, 2001
                          </div>
                        </div>

                        <div style={{ marginBottom: '12px' }}>
                          <div style={{ fontSize: '12px', fontFamily: 'Arial, sans-serif', color: '#000000', fontWeight: 'bold' }}>
                            «Термодинамические свойства синтетических материалов при экстремальных температурах»
                          </div>
                          <div style={{ fontSize: '11px', fontFamily: 'Arial, sans-serif', color: '#808080' }}>
                            
д-р Т. Блага — <i>Вестник материаловедения</i>, т. 22, вып. 4, 2002
                          </div>
                        </div>

                        <div style={{ marginBottom: '12px' }}>
                          <div style={{ fontSize: '12px', fontFamily: 'Arial, sans-serif', color: '#000000', fontWeight: 'bold' }}>
                            «Квантовая декогеренция в макроскопических системах: теоретические аспекты»
                          </div>
                          <div style={{ fontSize: '11px', fontFamily: 'Arial, sans-serif', color: '#808080' }}>
                            	[данные ограничены] — публикация отозвана по запросу издателя, март 2003
                          </div>
                        </div>
                      </div>
                    )}

                    {currentTab === 'documents' && (
                      <div>
                        <div style={{
                          fontSize: '14px',
                          fontWeight: 'bold',
                          fontFamily: 'Arial, sans-serif',
                          color: '#1A3A5C',
                          marginBottom: '5px'
                        }}>Document Library</div>
                        <hr style={{ border: 'none', borderTop: '1px solid #808080', marginBottom: '15px' }} />

                        <p style={{
                          fontSize: '12px',
                          fontFamily: 'Arial, sans-serif',
                          color: '#000000',
                          lineHeight: '1.5',
                          margin: '0 0 15px 0'
                        }}>
                          Access company documents, reports, and technical references. Documents marked RESTRICTED require Level 3 security clearance. For access requests, contact Security at ext. 4400.
                        </p>

                        <div style={{
                          fontSize: '13px',
                          fontWeight: 'bold',
                          fontFamily: 'Arial, sans-serif',
                          color: '#1A3A5C',
                          marginTop: '15px',
                          marginBottom: '8px'
                        }}>Company Reports</div>

                        <table border={1} cellPadding={4} cellSpacing={0} style={{ borderColor: '#808080', width: '100%', marginBottom: '20px' }}>
                          <tbody>
                            <tr style={{ backgroundColor: '#C0C0C0' }}>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Document</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Date</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Type</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Action</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[PDF] Annual Report 2002</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>02/15/02</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Public</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                                <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>[Download]</a>
                              </td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[PDF] Annual Report 2001</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>03/01/01</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Public</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                                <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>[Download]</a>
                              </td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[PDF] Q1 2002 Financial Summary</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>04/01/02</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Public</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                                <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>[Download]</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <div style={{
                          fontSize: '13px',
                          fontWeight: 'bold',
                          fontFamily: 'Arial, sans-serif',
                          color: '#1A3A5C',
                          marginTop: '15px',
                          marginBottom: '8px'
                        }}>Employee Resources</div>

                        <table border={1} cellPadding={4} cellSpacing={0} style={{ borderColor: '#808080', width: '100%', marginBottom: '20px' }}>
                          <tbody>
                            <tr style={{ backgroundColor: '#C0C0C0' }}>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Document</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Version</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Type</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Action</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[PDF] Employee Handbook</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>5.1</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Public</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                                <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>[Download]</a>
                              </td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[PDF] Safety Guidelines</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>3.2</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Public</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                                <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>[Download]</a>
                              </td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[DOC] Benefits Enrollment Form</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>2.0</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Public</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                                <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>[Download]</a>
                              </td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[XLS] Facilities Directory</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>—</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Public</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                                <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>[Download]</a>
                              </td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[PDF] IT Policy and Procedures</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>1.8</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Public</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                                <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>[Download]</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <div style={{
                          fontSize: '13px',
                          fontWeight: 'bold',
                          fontFamily: 'Arial, sans-serif',
                          color: '#1A3A5C',
                          marginTop: '15px',
                          marginBottom: '8px'
                        }}>Technical Documents</div>

                        <table border={1} cellPadding={4} cellSpacing={0} style={{ borderColor: '#808080', width: '100%' }}>
                          <tbody>
                            <tr style={{ backgroundColor: '#C0C0C0' }}>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Document</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Category</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Type</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Action</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[PDF] Lab Equipment User Manual</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Equipment</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Public</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                                <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>[Download]</a>
                              </td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[PDF] Chemical Storage Protocols</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Safety</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Public</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                                <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>[Download]</a>
                              </td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#808080' }}>[PDF] Project SSC-502 Status Report</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#808080' }}>Research</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                                <span style={{ color: '#8B0000' }}>[RESTRICTED]</span>
                              </td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#808080' }}>—</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#808080' }}>[DOC] Quantum Lab Procedures</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#808080' }}>Research</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                                <span style={{ color: '#8B0000' }}>[RESTRICTED]</span>
                              </td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#808080' }}>—</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#808080' }}>[PDF] Building C Access Protocols</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#808080' }}>Security</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                                <span style={{ color: '#8B0000' }}>[RESTRICTED]</span>
                              </td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#808080' }}>—</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[PDF] Cleanroom Standard Procedures</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Equipment</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Public</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                                <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>[Download]</a>
                              </td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#808080' }}>[XLS] Materials Inventory Database</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#808080' }}>Inventory</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                                <span style={{ color: '#8B0000' }}>[RESTRICTED]</span>
                              </td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#808080' }}>—</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[PDF] Waste Disposal Guidelines</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Safety</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Public</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                                <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>[Download]</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}

                    {currentTab === 'news' && (
                      <div>
                        <div style={{
                          fontSize: '14px',
                          fontWeight: 'bold',
                          fontFamily: 'Arial, sans-serif',
                          color: '#1A3A5C',
                          marginBottom: '5px'
                        }}>Последние новости НИЦ «Зарево»</div>
                        <hr style={{ border: 'none', borderTop: '1px solid #808080', marginBottom: '15px' }} />

                        <div style={{ marginBottom: '20px' }}>
                          <div style={{
                            fontSize: '12px',
                            fontWeight: 'bold',
                            fontFamily: 'Arial, sans-serif',
                            color: '#000000',
                            marginBottom: '3px'
                          }}>Плановые учения по эвакуации — итоги</div>
                          <div style={{
                            fontSize: '10px',
                            fontFamily: 'Arial, sans-serif',
                            color: '#808080',
                            marginBottom: '8px'
                          }}>22 апреля 2003</div>
                          <p style={{
                            fontSize: '12px',
                            fontFamily: 'Arial, sans-serif',
                            color: '#000000',
                            lineHeight: '1.5',
                            margin: '0'
                          }}>
                            На территории НИЦ «Зарево» успешно проведены плановые учения по экстренной эвакуации персонала. Время эвакуации административного корпуса составило 4 минуты 12 секунд. Следующие плановые учения — третий квартал 2003 года.
                          </p>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                          <div style={{
                            fontSize: '12px',
                            fontWeight: 'bold',
                            fontFamily: 'Arial, sans-serif',
                            color: '#000000',
                            marginBottom: '3px'
                          }}>Делегация НИЦ «Зарево» приняла участие в конференции по прикладной физике</div>
                          <div style={{
                            fontSize: '10px',
                            fontFamily: 'Arial, sans-serif',
                            color: '#808080',
                            marginBottom: '8px'
                          }}>14 апреля 2003</div>
                          <p style={{
                            fontSize: '12px',
                            fontFamily: 'Arial, sans-serif',
                            color: '#000000',
                            lineHeight: '1.5',
                            margin: '0'
                          }}>
                            Представители научного отдела НИЦ «Зарево» приняли участие в ежегодной конференции по прикладной физике в г. Прага. В рамках мероприятия состоялся ряд рабочих встреч с коллегами из профильных европейских институтов. Подробности — в отделе воспитательной работы.
                          </p>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                          <div style={{
                            fontSize: '12px',
                            fontWeight: 'bold',
                            fontFamily: 'Arial, sans-serif',
                            color: '#000000',
                            marginBottom: '3px'
                          }}>Награда КГБ для подразделения КСОБ</div>
                          <div style={{
                            fontSize: '10px',
                            fontFamily: 'Arial, sans-serif',
                            color: '#808080',
                            marginBottom: '8px'
                          }}>7 апреля 2003</div>
                          <p style={{
                            fontSize: '12px',
                            fontFamily: 'Arial, sans-serif',
                            color: '#000000',
                            lineHeight: '1.5',
                            margin: '0'
                          }}>
                            Корпус сдерживания и обеспечения безопасности НИЦ «Зарево» удостоен ведомственной награды Комитета государственной безопасности за вклад в обеспечение режима секретности в 2002 году. Церемония награждения состоялась на территории комплекса.
                          </p>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                          <div style={{
                            fontSize: '12px',
                            fontWeight: 'bold',
                            fontFamily: 'Arial, sans-serif',
                            color: '#000000',
                            marginBottom: '3px'
                          }}>Завершена модернизация вентиляционной системы корпуса A</div>
                          <div style={{
                            fontSize: '10px',
                            fontFamily: 'Arial, sans-serif',
                            color: '#808080',
                            marginBottom: '8px'
                          }}>18 марта 2003</div>
                          <p style={{
                            fontSize: '12px',
                            fontFamily: 'Arial, sans-serif',
                            color: '#000000',
                            lineHeight: '1.5',
                            margin: '0'
                          }}>
                            Технический отдел завершил плановую модернизацию вентиляционной системы административного корпуса. Работы выполнены в срок. Выражаем благодарность сотрудникам технического отдела за оперативную работу.
                          </p>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                          <div style={{
                            fontSize: '12px',
                            fontWeight: 'bold',
                            fontFamily: 'Arial, sans-serif',
                            color: '#000000',
                            marginBottom: '3px'
                          }}>Корпус B получил сертификат операционного соответствия</div>
                          <div style={{
                            fontSize: '10px',
                            fontFamily: 'Arial, sans-serif',
                            color: '#808080',
                            marginBottom: '8px'
                          }}>12 февраля 2003</div>
                          <p style={{
                            fontSize: '12px',
                            fontFamily: 'Arial, sans-serif',
                            color: '#000000',
                            lineHeight: '1.5',
                            margin: '0'
                          }}>
                            По результатам внешней проверки исследовательский корпус B получил сертификат операционного соответствия стандартам безопасности SS-SEC-2002. Следующая плановая проверка — февраль 2004 года.
                          </p>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                          <div style={{
                            fontSize: '12px',
                            fontWeight: 'bold',
                            fontFamily: 'Arial, sans-serif',
                            color: '#000000',
                            marginBottom: '3px'
                          }}>Расширение исследовательской базы подземного сектора</div>
                          <div style={{
                            fontSize: '10px',
                            fontFamily: 'Arial, sans-serif',
                            color: '#808080',
                            marginBottom: '8px'
                          }}>28 ноября 2002</div>
                          <p style={{
                            fontSize: '12px',
                            fontFamily: 'Arial, sans-serif',
                            color: '#000000',
                            lineHeight: '1.5',
                            margin: '0'
                          }}>
                            Завершены строительные работы по расширению исследовательских помещений сектора C, уровень -2. Новые лабораторные площади введены в эксплуатацию. Доступ — уровень допуска 3 и выше. Сотрудники могут получить обновлённые пропуска в отделе кадров.
                          </p>
                        </div>
                      </div>
                    )}

                    {currentTab === 'projects' && !selectedProject && (
                      <div>
                        <div style={{
                          fontSize: '14px',
                          fontWeight: 'bold',
                          fontFamily: 'Arial, sans-serif',
                          color: '#1A3A5C',
                          marginBottom: '5px'
                        }}>Активные исследовательские проекты</div>
                        <hr style={{ border: 'none', borderTop: '1px solid #808080', marginBottom: '15px' }} />

                        <p style={{
                          fontSize: '12px',
                          fontFamily: 'Arial, sans-serif',
                          color: '#000000',
                          lineHeight: '1.5',
                          margin: '0 0 12px 0'
                        }}>
                          Нажмите на код проекта для просмотра детальной информации. Проекты с грифом [ОГРАНИЧЕНО] и [ЗАСЕКРЕЧЕНО] требуют соответствующего уровня допуска.
                        </p>

                        <table border={1} cellPadding={4} cellSpacing={0} style={{ borderColor: '#808080', width: '100%' }}>
                          <tbody>
                            <tr style={{ backgroundColor: '#C0C0C0' }}>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '15%' }}>Код проекта</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '40%' }}>Наименование</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '25%' }}>Отдел</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '20%' }}>Статус</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                                <a href="#" onClick={(e) => { e.preventDefault(); setSelectedProject('ZR-1847'); }} style={{ color: '#0000CC', textDecoration: 'underline' }}>ZR-1847</a>
                              </td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Исследование термодинамических свойств синтетических сплавов</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Материаловедение</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Активен</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#808080' }}>ZR-2291</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#808080' }}>Квантовая декогеренция в макроскопических системах</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#808080' }}>Квантовые исследования</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                                <span style={{ color: '#8B0000' }}>[ОГРАНИЧЕНО]</span>
                              </td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                                <a href="#" onClick={(e) => { e.preventDefault(); setSelectedProject('ZR-2304'); }} style={{ color: '#0000CC', textDecoration: 'underline' }}>ZR-2304</a>
                              </td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Анализ электромагнитных полей нестандартной конфигурации</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Прикладная физика</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Активен</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#808080' }}>ZR-2388</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#808080' }}>Синтез экзотических материалов — фаза III</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#808080' }}>Квантовые исследования</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                                <span style={{ color: '#8B0000' }}>[ОГРАНИЧЕНО]</span>
                              </td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                                <a href="#" onClick={(e) => { e.preventDefault(); setSelectedProject('ZR-2412'); }} style={{ color: '#0000CC', textDecoration: 'underline' }}>ZR-2412</a>
                              </td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Вычислительное моделирование квантовых состояний</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Вычислительные системы</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Активен</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                                <a href="#" onClick={(e) => { e.preventDefault(); setSelectedProject('ZR-2539'); }} style={{ color: '#0000CC', textDecoration: 'underline' }}>ZR-2539</a>
                              </td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Исследование структурных изменений материалов при экстремальных условиях</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Материаловедение</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Активен</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#808080' }}>ZR-2614</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#808080' }}>[данные засекречены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#808080' }}>[данные засекречены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                                <span style={{ color: '#8B0000' }}>[ЗАСЕКРЕЧЕНО]</span>
                              </td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#808080' }}>ZR-2771</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#808080' }}>Разработка протоколов сдерживания — фаза II</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#808080' }}>[данные засекречены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                                <span style={{ color: '#8B0000' }}>[ЗАСЕКРЕЧЕНО]</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}

                    {currentTab === 'projects' && selectedProject && (
                      <div>
                        <div style={{ marginBottom: '10px' }}>
                          <a href="#" onClick={(e) => { e.preventDefault(); setSelectedProject(null); }} style={{ color: '#0000CC', textDecoration: 'underline', fontSize: '11px', fontFamily: 'Arial, sans-serif' }}>
                            &lt;&lt; Вернуться к списку активных проектов
                          </a>
                        </div>

                        {selectedProject === 'ZR-1847' && (
                          <>
                            <div style={{
                              fontSize: '14px',
                              fontWeight: 'bold',
                              fontFamily: 'Arial, sans-serif',
                              color: '#1A3A5C',
                              marginBottom: '5px'
                            }}>ZR-1847: Исследование термодинамических свойств синтетических сплавов</div>
                            <hr style={{ border: 'none', borderTop: '1px solid #808080', marginBottom: '15px' }} />

                            <table border={1} cellPadding={4} cellSpacing={0} style={{ borderColor: '#808080', width: '100%', marginBottom: '15px' }}>
                              <tbody>
                                <tr style={{ backgroundColor: '#F5F5F5' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '200px' }}>Статус:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Активен</td>
                                </tr>
                                <tr style={{ backgroundColor: '#FFFFFF' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Отдел:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Материаловедение</td>
                                </tr>
                                <tr style={{ backgroundColor: '#F5F5F5' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Руководитель:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>д-р Д. Гарай</td>
                                </tr>
                                <tr style={{ backgroundColor: '#FFFFFF' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Дата начала:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>15 сентября 2001</td>
                                </tr>
                                <tr style={{ backgroundColor: '#F5F5F5' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Плановое завершение:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>30 июня 2004</td>
                                </tr>
                                <tr style={{ backgroundColor: '#FFFFFF' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень доступа:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>1</td>
                                </tr>
                              </tbody>
                            </table>

                            <div style={{
                              fontSize: '13px',
                              fontWeight: 'bold',
                              fontFamily: 'Arial, sans-serif',
                              color: '#1A3A5C',
                              marginTop: '15px',
                              marginBottom: '8px'
                            }}>Описание проекта</div>

                            <p style={{
                              fontSize: '12px',
                              fontFamily: 'Arial, sans-serif',
                              color: '#000000',
                              lineHeight: '1.5',
                              margin: '0 0 12px 0'
                            }}>
                              Проект направлен на изучение термодинамических свойств синтетических металлических сплавов при воздействии экстремальных температур и давления. В рамках проекта исследуется поведение кристаллических структур при нестандартных условиях эксплуатации с целью разработки материалов повышенной прочности и термостойкости.
                            </p>

                            <p style={{
                              fontSize: '12px',
                              fontFamily: 'Arial, sans-serif',
                              color: '#000000',
                              lineHeight: '1.5',
                              margin: '0 0 12px 0'
                            }}>
                              Результаты исследования предполагается применить в области разработки конструкционных материалов для объектов с повышенными требованиями к термической устойчивости.
                            </p>

                            <div style={{
                              fontSize: '13px',
                              fontWeight: 'bold',
                              fontFamily: 'Arial, sans-serif',
                              color: '#1A3A5C',
                              marginTop: '15px',
                              marginBottom: '8px'
                            }}>Текущий этап</div>

                            <p style={{
                              fontSize: '12px',
                              fontFamily: 'Arial, sans-serif',
                              color: '#000000',
                              lineHeight: '1.5',
                              margin: '0 0 12px 0'
                            }}>
                              Проект находится на третьем этапе из пяти. В настоящее время проводится серия испытаний образцов сплавов серии SS-M при температурах от -180°C до +1200°C. Промежуточные результаты соответствуют плановым показателям.
                            </p>

                            <div style={{
                              fontSize: '13px',
                              fontWeight: 'bold',
                              fontFamily: 'Arial, sans-serif',
                              color: '#1A3A5C',
                              marginTop: '15px',
                              marginBottom: '8px'
                            }}>Публикации в рамках проекта</div>

                            <p style={{
                              fontSize: '12px',
                              fontFamily: 'Arial, sans-serif',
                              color: '#000000',
                              lineHeight: '1.5',
                              margin: '0 0 12px 0'
                            }}>
                              • «Термодинамические свойства синтетических материалов при экстремальных температурах», д-р Д. Гарай — Вестник материаловедения, т. 22, вып. 4, 2002
                            </p>

                            <div style={{
                              fontSize: '13px',
                              fontWeight: 'bold',
                              fontFamily: 'Arial, sans-serif',
                              color: '#1A3A5C',
                              marginTop: '15px',
                              marginBottom: '8px'
                            }}>Участники проекта</div>

                            <table border={1} cellPadding={4} cellSpacing={0} style={{ borderColor: '#808080', width: '100%', marginBottom: '15px' }}>
                              <tbody>
                                <tr style={{ backgroundColor: '#C0C0C0' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '30%' }}>Имя</td>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '35%' }}>Должность</td>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '35%' }}>Отдел</td>
                                </tr>
                                <tr style={{ backgroundColor: '#FFFFFF' }}>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>д-р Д. Гарай</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Руководитель проекта</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Материаловедение</td>
                                </tr>
                                <tr style={{ backgroundColor: '#F5F5F5' }}>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>М. Новотны</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Старший исследователь</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Материаловедение</td>
                                </tr>
                                <tr style={{ backgroundColor: '#FFFFFF' }}>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Л. Дворак</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Лаборант</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Материаловедение</td>
                                </tr>
                                <tr style={{ backgroundColor: '#F5F5F5' }}>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>В. Томашевский</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Технический консультант</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Технический отдел</td>
                                </tr>
                              </tbody>
                            </table>

                            <div style={{
                              fontSize: '13px',
                              fontWeight: 'bold',
                              fontFamily: 'Arial, sans-serif',
                              color: '#1A3A5C',
                              marginTop: '15px',
                              marginBottom: '8px'
                            }}>Оборудование</div>

                            <p style={{
                              fontSize: '12px',
                              fontFamily: 'Arial, sans-serif',
                              color: '#000000',
                              lineHeight: '1.5',
                              margin: '0 0 12px 0'
                            }}>
                              • Рентгеновский дифрактометр, Корпус B, каб. 108<br />
                              • Криогенная испытательная камера, Сектор B, уровень -1<br />
                              • Термоаналитическая установка SS-TA-04, Корпус B, каб. 215
                            </p>

                            <div style={{
                              fontSize: '13px',
                              fontWeight: 'bold',
                              fontFamily: 'Arial, sans-serif',
                              color: '#1A3A5C',
                              marginTop: '15px',
                              marginBottom: '8px'
                            }}>Примечания</div>

                            <p style={{
                              fontSize: '12px',
                              fontFamily: 'Arial, sans-serif',
                              color: '#000000',
                              lineHeight: '1.5',
                              margin: '0 0 12px 0'
                            }}>
                              Промежуточный отчёт за первый квартал 2003 года передан в дирекцию 31 марта 2003. Следующий отчёт — 30 июня 2003.
                            </p>

                            <p style={{
                              fontSize: '12px',
                              fontFamily: 'Arial, sans-serif',
                              color: '#000000',
                              lineHeight: '1.5',
                              margin: '0'
                            }}>
                              Для получения полной технической документации обратитесь к руководителю проекта или в отдел технической документации, каб. 218.
                            </p>
                          </>
                        )}

                        {selectedProject === 'SSC-519' && (
                          <>
                            <div style={{
                              fontSize: '14px',
                              fontWeight: 'bold',
                              fontFamily: 'Arial, sans-serif',
                              color: '#1A3A5C',
                              marginBottom: '5px'
                            }}>Project SSC-519: Thermal Conductivity Tests</div>
                            <hr style={{ border: 'none', borderTop: '1px solid #808080', marginBottom: '15px' }} />

                            <table border={1} cellPadding={4} cellSpacing={0} style={{ borderColor: '#808080', width: '100%', marginBottom: '15px' }}>
                              <tbody>
                                <tr style={{ backgroundColor: '#F5F5F5' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '150px' }}>Project Code:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>SSC-519</td>
                                </tr>
                                <tr style={{ backgroundColor: '#FFFFFF' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Division:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Materials Research</td>
                                </tr>
                                <tr style={{ backgroundColor: '#F5F5F5' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Principal Investigator:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Dr. Sarah Williams</td>
                                </tr>
                                <tr style={{ backgroundColor: '#FFFFFF' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Start Date:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>August 1, 2001</td>
                                </tr>
                                <tr style={{ backgroundColor: '#F5F5F5' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Status:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Active - 30% Complete</td>
                                </tr>
                              </tbody>
                            </table>

                            <div style={{
                              fontSize: '13px',
                              fontWeight: 'bold',
                              fontFamily: 'Arial, sans-serif',
                              color: '#1A3A5C',
                              marginTop: '15px',
                              marginBottom: '8px'
                            }}>Project Description</div>

                            <p style={{
                              fontSize: '12px',
                              fontFamily: 'Arial, sans-serif',
                              color: '#000000',
                              lineHeight: '1.5',
                              margin: '0 0 12px 0'
                            }}>
                              Comprehensive analysis of thermal conductivity properties in novel composite materials. This project examines heat transfer characteristics across various temperature ranges and environmental conditions.
                            </p>

                            <p style={{
                              fontSize: '12px',
                              fontFamily: 'Arial, sans-serif',
                              color: '#000000',
                              lineHeight: '1.5',
                              margin: '0 0 12px 0'
                            }}>
                              Applications include thermal management systems for electronics, aerospace heat shields, and industrial insulation materials. Testing is conducted using state-of-the-art calorimetry equipment in Building B.
                            </p>
                          </>
                        )}

                        {selectedProject === 'SSC-601' && (
                          <>
                            <div style={{
                              fontSize: '14px',
                              fontWeight: 'bold',
                              fontFamily: 'Arial, sans-serif',
                              color: '#1A3A5C',
                              marginBottom: '5px'
                            }}>Project SSC-601: Carbon Nanotube Assembly</div>
                            <hr style={{ border: 'none', borderTop: '1px solid #808080', marginBottom: '15px' }} />

                            <table border={1} cellPadding={4} cellSpacing={0} style={{ borderColor: '#808080', width: '100%', marginBottom: '15px' }}>
                              <tbody>
                                <tr style={{ backgroundColor: '#F5F5F5' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '150px' }}>Project Code:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>SSC-601</td>
                                </tr>
                                <tr style={{ backgroundColor: '#FFFFFF' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Division:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Nanotechnology</td>
                                </tr>
                                <tr style={{ backgroundColor: '#F5F5F5' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Principal Investigator:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Dr. Michael Torres</td>
                                </tr>
                                <tr style={{ backgroundColor: '#FFFFFF' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Start Date:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>March 1, 2002</td>
                                </tr>
                                <tr style={{ backgroundColor: '#F5F5F5' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Status:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Active - 15% Complete</td>
                                </tr>
                              </tbody>
                            </table>

                            <div style={{
                              fontSize: '13px',
                              fontWeight: 'bold',
                              fontFamily: 'Arial, sans-serif',
                              color: '#1A3A5C',
                              marginTop: '15px',
                              marginBottom: '8px'
                            }}>Project Description</div>

                            <p style={{
                              fontSize: '12px',
                              fontFamily: 'Arial, sans-serif',
                              color: '#000000',
                              lineHeight: '1.5',
                              margin: '0 0 12px 0'
                            }}>
                              Development of controlled assembly techniques for carbon nanotubes into macroscopic structures. Research focuses on alignment methods and bonding strategies to preserve nanoscale properties at larger scales.
                            </p>
                          </>
                        )}

                        {selectedProject === 'SSC-615' && (
                          <>
                            <div style={{
                              fontSize: '14px',
                              fontWeight: 'bold',
                              fontFamily: 'Arial, sans-serif',
                              color: '#1A3A5C',
                              marginBottom: '5px'
                            }}>Project SSC-615: Biocompatible Polymers</div>
                            <hr style={{ border: 'none', borderTop: '1px solid #808080', marginBottom: '15px' }} />

                            <table border={1} cellPadding={4} cellSpacing={0} style={{ borderColor: '#808080', width: '100%', marginBottom: '15px' }}>
                              <tbody>
                                <tr style={{ backgroundColor: '#F5F5F5' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '150px' }}>Project Code:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>SSC-615</td>
                                </tr>
                                <tr style={{ backgroundColor: '#FFFFFF' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Division:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Biomaterials</td>
                                </tr>
                                <tr style={{ backgroundColor: '#F5F5F5' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Principal Investigator:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Dr. Jennifer Liu</td>
                                </tr>
                                <tr style={{ backgroundColor: '#FFFFFF' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Start Date:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>October 1, 2001</td>
                                </tr>
                                <tr style={{ backgroundColor: '#F5F5F5' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Status:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Active - 45% Complete</td>
                                </tr>
                              </tbody>
                            </table>

                            <div style={{
                              fontSize: '13px',
                              fontWeight: 'bold',
                              fontFamily: 'Arial, sans-serif',
                              color: '#1A3A5C',
                              marginTop: '15px',
                              marginBottom: '8px'
                            }}>Project Description</div>

                            <p style={{
                              fontSize: '12px',
                              fontFamily: 'Arial, sans-serif',
                              color: '#000000',
                              lineHeight: '1.5',
                              margin: '0 0 12px 0'
                            }}>
                              Design and synthesis of biocompatible polymer materials for medical device applications. Research includes cytotoxicity testing, degradation studies, and mechanical property optimization for implantable devices.
                            </p>
                          </>
                        )}

                        {selectedProject === 'SSC-628' && (
                          <>
                            <div style={{
                              fontSize: '14px',
                              fontWeight: 'bold',
                              fontFamily: 'Arial, sans-serif',
                              color: '#1A3A5C',
                              marginBottom: '5px'
                            }}>Project SSC-628: Superconductor Research</div>
                            <hr style={{ border: 'none', borderTop: '1px solid #808080', marginBottom: '15px' }} />

                            <table border={1} cellPadding={4} cellSpacing={0} style={{ borderColor: '#808080', width: '100%', marginBottom: '15px' }}>
                              <tbody>
                                <tr style={{ backgroundColor: '#F5F5F5' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '150px' }}>Project Code:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>SSC-628</td>
                                </tr>
                                <tr style={{ backgroundColor: '#FFFFFF' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Division:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Quantum Physics</td>
                                </tr>
                                <tr style={{ backgroundColor: '#F5F5F5' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Principal Investigator:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Dr. Robert Chen</td>
                                </tr>
                                <tr style={{ backgroundColor: '#FFFFFF' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Start Date:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>June 15, 2001</td>
                                </tr>
                                <tr style={{ backgroundColor: '#F5F5F5' }}>
                                  <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Status:</td>
                                  <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Active - 55% Complete</td>
                                </tr>
                              </tbody>
                            </table>

                            <div style={{
                              fontSize: '13px',
                              fontWeight: 'bold',
                              fontFamily: 'Arial, sans-serif',
                              color: '#1A3A5C',
                              marginTop: '15px',
                              marginBottom: '8px'
                            }}>Project Description</div>

                            <p style={{
                              fontSize: '12px',
                              fontFamily: 'Arial, sans-serif',
                              color: '#000000',
                              lineHeight: '1.5',
                              margin: '0 0 12px 0'
                            }}>
                              Investigation of high-temperature superconducting materials and mechanisms. The project aims to develop materials with improved critical temperatures and current-carrying capacity for practical applications in energy transmission and magnetic levitation systems.
                            </p>
                          </>
                        )}
                      </div>
                    )}

                    {currentTab === 'facilities' && (
                      <div>
                        <div style={{
                          fontSize: '14px',
                          fontWeight: 'bold',
                          fontFamily: 'Arial, sans-serif',
                          color: '#1A3A5C',
                          marginBottom: '5px'
                        }}>Обзор объектов корпорации</div>
                        <hr style={{ border: 'none', borderTop: '1px solid #808080', marginBottom: '15px' }} />

                        <p style={{
                          fontSize: '12px',
                          fontFamily: 'Arial, sans-serif',
                          color: '#000000',
                          lineHeight: '1.5',
                          margin: '0 0 12px 0'
                        }}>
                          Научно-исследовательский центр «Зарево» расположен в подземном исследовательском комплексе общей площадью [данные ограничены] кв. м. Комплекс включает три наземных корпуса и четыре подземных исследовательских сектора. Объект введён в эксплуатацию в 1967 году и с тех пор непрерывно расширяется.
                        </p>

                        <div style={{
                          fontSize: '14px',
                          fontWeight: 'bold',
                          fontFamily: 'Arial, sans-serif',
                          color: '#1A3A5C',
                          marginTop: '20px',
                          marginBottom: '5px'
                        }}>Инфраструктура</div>
                        <hr style={{ border: 'none', borderTop: '1px solid #808080', marginBottom: '15px' }} />

                        {/* КОРПУС A */}
                        <div style={{
                          fontSize: '13px',
                          fontWeight: 'bold',
                          fontFamily: 'Arial, sans-serif',
                          color: '#1A3A5C',
                          marginBottom: '8px',
                          marginTop: '15px'
                        }}>Корпус A — Административный</div>

                        <table border={1} cellPadding={4} cellSpacing={0} style={{ borderColor: '#808080', width: '100%', marginBottom: '20px' }}>
                          <tbody>
                            <tr style={{ backgroundColor: '#C0C0C0' }}>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '35%' }}>Отдел</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '25%' }}>Руководитель</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '20%' }}>Персонал</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '20%' }}>Доступ</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Дирекция НИЦ «Зарево»</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>3</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень 3</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Отдел кадров</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Л. Новакова</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>4</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень 1</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Бухгалтерия</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Ф. Врана</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>3</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень 1</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Технический отдел</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>В. Томашевский</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>12</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень 1</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Отдел собственной безопасности</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>К. Дворжак</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень 2</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Отдел идеологической работы</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Я. Поспишил</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>2</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень 1</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Медпункт</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>д-р М. Горалова</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>2</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень 1</td>
                            </tr>
                          </tbody>
                        </table>

                        {/* КОРПУС B */}
                        <div style={{
                          fontSize: '13px',
                          fontWeight: 'bold',
                          fontFamily: 'Arial, sans-serif',
                          color: '#1A3A5C',
                          marginBottom: '8px',
                          marginTop: '15px'
                        }}>Корпус B — Исследовательский</div>

                        <table border={1} cellPadding={4} cellSpacing={0} style={{ borderColor: '#808080', width: '100%', marginBottom: '20px' }}>
                          <tbody>
                            <tr style={{ backgroundColor: '#C0C0C0' }}>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '35%' }}>Отдел</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '25%' }}>Руководитель</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '20%' }}>Персонал</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '20%' }}>Доступ</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Отдел квантовых исследований</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень 3</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Отдел материаловедения</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>д-р Д. Гарай</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>14</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень 2</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Отдел прикладной физики</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>д-р Е. Кралова</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>11</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень 2</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Отдел вычислительных систем</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>д-р Т. Блага</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>8</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень 2</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Отдел технической документации</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>М. Дюбайло</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>3</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень 2</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень 3+</td>
                            </tr>
                          </tbody>
                        </table>

                        {/* КОРПУС C */}
                        <div style={{
                          fontSize: '13px',
                          fontWeight: 'bold',
                          fontFamily: 'Arial, sans-serif',
                          color: '#1A3A5C',
                          marginBottom: '8px',
                          marginTop: '15px'
                        }}>Корпус C — Технический</div>

                        <table border={1} cellPadding={4} cellSpacing={0} style={{ borderColor: '#808080', width: '100%', marginBottom: '20px' }}>
                          <tbody>
                            <tr style={{ backgroundColor: '#C0C0C0' }}>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '35%' }}>Отдел</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '25%' }}>Руководитель</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '20%' }}>Персонал</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '20%' }}>Доступ</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Отдел логистики и снабжения</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Л. Враны</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>5</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень 1</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Инженерно-технический центр</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>П. Коларж</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>7</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень 1</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Склад и архив оборудования</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>О. Кратохвил</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>4</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень 1</td>
                            </tr>
                          </tbody>
                        </table>

                        {/* ПОДЗЕМНЫЕ СЕКТОРЫ */}
                        <div style={{
                          fontSize: '13px',
                          fontWeight: 'bold',
                          fontFamily: 'Arial, sans-serif',
                          color: '#1A3A5C',
                          marginBottom: '8px',
                          marginTop: '15px'
                        }}>Подземные подразделения</div>

                        <table border={1} cellPadding={4} cellSpacing={0} style={{ borderColor: '#808080', width: '100%', marginBottom: '20px' }}>
                          <tbody>
                            <tr style={{ backgroundColor: '#C0C0C0' }}>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '18%' }}>Сектор</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '30%' }}>Назначение</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '22%' }}>Руководитель</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '15%' }}>Персонал</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '15%' }}>Доступ</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Сектор A, уровень -1</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Технические системы и коммуникации</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>В. Томашевский</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>6</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень 1</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Сектор B, уровень -1</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Вспомогательные лаборатории</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень 2</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Сектор C, уровень -2</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Исследовательские зоны</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень 3</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Сектор D, уровень -2</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Уровень 3+</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Сектор D, уровень -3</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                            </tr>
                          </tbody>
                        </table>

                        <div style={{
                          fontSize: '14px',
                          fontWeight: 'bold',
                          fontFamily: 'Arial, sans-serif',
                          color: '#1A3A5C',
                          marginTop: '20px',
                          marginBottom: '5px'
                        }}>Основное оборудование</div>
                        <hr style={{ border: 'none', borderTop: '1px solid #808080', marginBottom: '15px' }} />

                        <table border={1} cellPadding={4} cellSpacing={0} style={{ borderColor: '#808080', width: '100%', marginBottom: '20px' }}>
                          <tbody>
                            <tr style={{ backgroundColor: '#C0C0C0' }}>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '45%' }}>Оборудование</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '35%' }}>Расположение</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '20%' }}>Контакт</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Электронный микроскоп высокого разрешения</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Корпус B, каб. 215</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>доб. 412</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Рентгеновский дифрактометр</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Корпус B, каб. 108</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>доб. 418</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Спектрометр ядерного магнитного резонанса</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Корпус B, каб. 302</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>доб. 425</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Криогенная испытательная камера</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Сектор B, уровень -1</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>доб. 501</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Установка синтеза экзотических материалов</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                            </tr>
                          </tbody>
                        </table>

                        <div style={{
                          fontSize: '14px',
                          fontWeight: 'bold',
                          fontFamily: 'Arial, sans-serif',
                          color: '#1A3A5C',
                          marginTop: '20px',
                          marginBottom: '5px'
                        }}>Сервисы комплекса</div>
                        <hr style={{ border: 'none', borderTop: '1px solid #808080', marginBottom: '15px' }} />

                        <p style={{
                          fontSize: '12px',
                          fontFamily: 'Arial, sans-serif',
                          color: '#000000',
                          lineHeight: '1.5',
                          margin: '0 0 8px 0'
                        }}>
                          <strong>Столовая:</strong> корпус A, 1 этаж — Режим работы: пн-пт, 07:30-15:00.
                        </p>
                        <p style={{
                          fontSize: '12px',
                          fontFamily: 'Arial, sans-serif',
                          color: '#000000',
                          lineHeight: '1.5',
                          margin: '0 0 8px 0'
                        }}>
                          <strong>Библиотека:</strong> корпус A, 2 этаж — Режим работы: пн-пт, 08:00 — 18:00.
                        </p>
                        <p style={{
                          fontSize: '12px',
                          fontFamily: 'Arial, sans-serif',
                          color: '#000000',
                          lineHeight: '1.5',
                          margin: '0 0 8px 0'
                        }}>
                          <strong>Медпункт:</strong> корпус A, каб. 118 — Режим работы: пн-пт, 08:00 — 17:00, доб. 204.
                        </p>
                        <p style={{
                          fontSize: '12px',
                          fontFamily: 'Arial, sans-serif',
                          color: '#000000',
                          lineHeight: '1.5',
                          margin: '0 0 8px 0'
                        }}>
                          <strong>Пост охраны:</strong> корпус A, главный вход — Режим работы: круглосуточно, доб. 301.
                        </p>
                        <p style={{
                          fontSize: '12px',
                          fontFamily: 'Arial, sans-serif',
                          color: '#000000',
                          lineHeight: '1.5',
                          margin: '0 0 8px 0'
                        }}>
                          <strong>Склад и выдача оборудования:</strong> корпус C, главный вход — Режим работы: пн-пт, 08:00 — 16:00.
                        </p>
                      </div>
                    )}
                    

                    {currentTab === 'calendar' && (
                      <div>
                        <div style={{
                          fontSize: '14px',
                          fontWeight: 'bold',
                          fontFamily: 'Arial, sans-serif',
                          color: '#1A3A5C',
                          marginBottom: '5px'
                        }}>Календарь мероприятий — апрель 2003</div>
                        <hr style={{ border: 'none', borderTop: '1px solid #808080', marginBottom: '15px' }} />

                        <table border={1} cellPadding={4} cellSpacing={0} style={{ borderColor: '#808080', width: '100%', marginBottom: '20px' }}>
                          <tbody>
                            <tr style={{ backgroundColor: '#C0C0C0' }}>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '15%' }}>Дата</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '50%' }}>Мероприятие</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '35%' }}>Место</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>6 апреля</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Плановое переоформление пропусков (начало)</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Корпус A, каб. 114</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>9 апреля</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Начало набора в резервный состав КСОБ</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Корпус A, каб. 100</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>10 апреля</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Технический аудит вентиляционной системы</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Корпус A, секторы A и B</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>12 апреля</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>День космонавтики — памятное мероприятие</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Корпус A, столовая</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>14-15 апреля</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Конференция по прикладной физике</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Прага, Чехия</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>17 апреля</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Плановый медицинский осмотр (начало)</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Корпус A, каб. 118</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>22 апреля</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Плановые учения по эвакуации</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Весь комплекс</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>24 апреля</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Ежемесячное собрание сотрудников</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Корпус A, столовая</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>25 апреля</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Техническое обслуживание оборудования Корпус B</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Корпус B — закрыт</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>26 апреля</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Траурное мероприятие памяти жертв Чернобыля</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>г. Острава, площадь Масарика</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>30 апреля</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Выдача заработной платы за апрель</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Бухгалтерия, каб. 116</td>
                            </tr>
                          </tbody>
                        </table>

                        <div style={{
                          fontSize: '14px',
                          fontWeight: 'bold',
                          fontFamily: 'Arial, sans-serif',
                          color: '#1A3A5C',
                          marginTop: '20px',
                          marginBottom: '5px'
                        }}>Май 2003 — предварительно</div>
                        <hr style={{ border: 'none', borderTop: '1px solid #808080', marginBottom: '15px' }} />

                        <table border={1} cellPadding={4} cellSpacing={0} style={{ borderColor: '#808080', width: '100%', marginBottom: '20px' }}>
                          <tbody>
                            <tr style={{ backgroundColor: '#C0C0C0' }}>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '15%' }}>Дата</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '50%' }}>Мероприятие</td>
                              <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '35%' }}>Место</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>1 мая</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>День труда — рабочий день в штатном режиме.</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>—</td>
                            </tr>
                            <tr style={{ backgroundColor: '#F5F5F5' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>13 мая</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Контрольная точка исследовательской программы [данные ограничены].</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Корпус B</td>
                            </tr>
                            <tr style={{ backgroundColor: '#FFFFFF' }}>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>16 мая</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Ежегодный корпоративный вечер.</td>
                              <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Корпус A, конференц-зал</td>
                            </tr>
                          </tbody>
                        </table>

                        <div style={{
                          backgroundColor: '#FFFF99',
                          border: '1px solid #000000',
                          padding: '10px',
                          fontSize: '11px',
                          fontFamily: 'Arial, sans-serif',
                          color: '#000000',
                          marginTop: '20px'
                        }}>
                          <strong>ОБРАТИТЕ ВНИМАНИЕ:</strong> для добавления мероприятия в календарь направьте заявку в отдел идеологической работы не позднее чем за две недели до даты проведения.
                        </div>
                      </div>
                    )}
                  </>
                )}

                {currentPage === 'portal' && (
                  <div>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: 'bold',
                      fontFamily: 'Arial, sans-serif',
                      color: '#1A3A5C',
                      marginBottom: '5px'
                    }}>Портал сотрудника</div>
                    <hr style={{ border: 'none', borderTop: '1px solid #808080', marginBottom: '15px' }} />

                    

                    <div style={{
                      fontSize: '13px',
                      fontWeight: 'bold',
                      fontFamily: 'Arial, sans-serif',
                      color: '#1A3A5C',
                      marginBottom: '10px'
                    }}>Быстрые ссылки</div>

                    <table border={1} cellPadding={8} cellSpacing={0} style={{ borderColor: '#808080', width: '100%', marginBottom: '20px' }}>
                      <tbody>
                        <tr style={{ backgroundColor: '#FFFFFF' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                            <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>Мой график работы</a>
                          </td>
                        </tr>
                        <tr style={{ backgroundColor: '#F5F5F5' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                            <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>Бенефиты и заработная плата</a>
                          </td>
                        </tr>
                        <tr style={{ backgroundColor: '#FFFFFF' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                            <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>Обучение и развитие</a>
                          </td>
                        </tr>
                        <tr style={{ backgroundColor: '#F5F5F5' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                            <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>Заявки на IT-поддержку</a>
                          </td>
                        </tr>
                        <tr style={{ backgroundColor: '#FFFFFF' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                            <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>Внутренние документы</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                  
                  </div>
                )}

                {currentPage === 'contacts' && (
                  <div>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: 'bold',
                      fontFamily: 'Arial, sans-serif',
                      color: '#1A3A5C',
                      marginBottom: '5px'
                    }}>Контакты НИЦ «Зарево»</div>
                    <hr style={{ border: 'none', borderTop: '1px solid #808080', marginBottom: '15px' }} />

                    <p style={{
                      fontSize: '12px',
                      fontFamily: 'Arial, sans-serif',
                      color: '#000000',
                      lineHeight: '1.5',
                      margin: '0 0 15px 0'
                    }}>
                      <strong>Главный корпус:</strong> Научно-исследовательский центр «Зарево», район Зарево, Острава 702 00, Чешская Республика<br />
                      <strong>Тел.:</strong> +420 596 XXX XXX<br />
                      <strong>Факс:</strong> +420 596 XXX XXX
                    </p>

                    <div style={{
                      fontSize: '13px',
                      fontWeight: 'bold',
                      fontFamily: 'Arial, sans-serif',
                      color: '#1A3A5C',
                      marginTop: '15px',
                      marginBottom: '8px'
                    }}>Общие контакты</div>

                    <table border={1} cellPadding={4} cellSpacing={0} style={{ borderColor: '#808080', width: '100%', marginBottom: '20px' }}>
                      <tbody>
                        <tr style={{ backgroundColor: '#C0C0C0' }}>
                          <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '25%' }}>Отдел</td>
                          <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '30%' }}>Контактное лицо</td>
                          <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '15%' }}>Добавочный</td>
                          <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '30%' }}>Email</td>
                        </tr>
                        <tr style={{ backgroundColor: '#FFFFFF' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Ресепшен</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Дежурный администратор</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>100</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                            <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>reception@synthetical-science.com</a>
                          </td>
                        </tr>
                        <tr style={{ backgroundColor: '#F5F5F5' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Технический отдел</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>В. Томашевский</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>201</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                            <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>tech@synthetical-science.com</a>
                          </td>
                        </tr>
                        <tr style={{ backgroundColor: '#FFFFFF' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Отдел кадров</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Л. Новакова</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>114</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                            <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>hr@synthetical-science.com</a>
                          </td>
                        </tr>
                        <tr style={{ backgroundColor: '#F5F5F5' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Бухгалтерия</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Ф. Врана</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>116</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                            <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>finance@synthetical-science.com</a>
                          </td>
                        </tr>
                        <tr style={{ backgroundColor: '#FFFFFF' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Отдел собственной безопасности</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Дежурный ОСБ</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>301</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                            <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>security@synthetical-science.com</a>
                          </td>
                        </tr>
                        <tr style={{ backgroundColor: '#F5F5F5' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Медпункт</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>д-р М. Горалова</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>204</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                            <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>medical@synthetical-science.com</a>
                          </td>
                        </tr>
                        <tr style={{ backgroundColor: '#FFFFFF' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>IT поддержка</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Дежурный специалист</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>412</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                            <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>it@synthetical-science.com</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div style={{
                      fontSize: '13px',
                      fontWeight: 'bold',
                      fontFamily: 'Arial, sans-serif',
                      color: '#1A3A5C',
                      marginTop: '15px',
                      marginBottom: '8px'
                    }}>Руководители подразделений</div>

                    <table border={1} cellPadding={4} cellSpacing={0} style={{ borderColor: '#808080', width: '100%', marginBottom: '20px' }}>
                      <tbody>
                        <tr style={{ backgroundColor: '#C0C0C0' }}>
                          <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '30%' }}>Подразделение</td>
                          <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '25%' }}>Руководитель</td>
                          <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '15%' }}>Добавочный</td>
                          <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '30%' }}>Email</td>
                        </tr>
                        <tr style={{ backgroundColor: '#FFFFFF' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Дирекция НИЦ «Зарево»</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                            <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>director@synthetical-science.com</a>
                          </td>
                        </tr>
                        <tr style={{ backgroundColor: '#F5F5F5' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Технический отдел</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>В. Томашевский</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>201</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                            <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>v.tomashevsky@synthetical-science.com</a>
                          </td>
                        </tr>
                        <tr style={{ backgroundColor: '#FFFFFF' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Отдел кадров</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Л. Новакова</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>214</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                            <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>l.novakova@synthetical-science.com</a>
                          </td>
                        </tr>
                        <tr style={{ backgroundColor: '#F5F5F5' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Бухгалтерия</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Ф. Врана</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>216</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                            <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>f.vrana@synthetical-science.com</a>
                          </td>
                        </tr>
                        <tr style={{ backgroundColor: '#FFFFFF' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Отдел собственной безопасности</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>К. Дворжак</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>300</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                            <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>k.dvorzhak@synthetical-science.com</a>
                          </td>
                        </tr>
                        <tr style={{ backgroundColor: '#F5F5F5' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Отдел воспитательной работы</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Я. Поспишил</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>306</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                            <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>y.pospishil@synthetical-science.com</a>
                          </td>
                        </tr>
                        <tr style={{ backgroundColor: '#FFFFFF' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Отдел материаловедения</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>д-р Д. Гарай</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>401</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                            <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>r.shimek@synthetical-science.com</a>
                          </td>
                        </tr>
                        <tr style={{ backgroundColor: '#F5F5F5' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Отдел прикладной физики</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>д-р Е. Кралова</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>402</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                            <a href="#" style={{ color: '#0000CC', textDecoration: 'underline' }}>e.kralova@synthetical-science.com</a>
                          </td>
                        </tr>
                        <tr style={{ backgroundColor: '#FFFFFF' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Отдел квантовых исследований</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>[данные ограничены]</td>
                        </tr>
                      </tbody>
                    </table>

                    <div style={{
                      fontSize: '13px',
                      fontWeight: 'bold',
                      fontFamily: 'Arial, sans-serif',
                      color: '#1A3A5C',
                      marginTop: '15px',
                      marginBottom: '8px'
                    }}>Экстренные контакты</div>

                    <table border={1} cellPadding={4} cellSpacing={0} style={{ borderColor: '#808080', width: '100%' }}>
                      <tbody>
                        <tr style={{ backgroundColor: '#C0C0C0' }}>
                          <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '60%' }}>Служба</td>
                          <td style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '12px', width: '40%' }}>Номер</td>
                        </tr>
                        <tr style={{ backgroundColor: '#FFFFFF' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', fontWeight: 'bold', color: '#8B0000' }}>Пожарная охрана / Скорая помощь</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', fontWeight: 'bold', color: '#8B0000' }}>112</td>
                        </tr>
                        <tr style={{ backgroundColor: '#F5F5F5' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Дежурный ОСБ (круглосуточно)</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', fontWeight: 'bold' }}>доб. 301</td>
                        </tr>
                        <tr style={{ backgroundColor: '#FFFFFF' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Экстренная техническая служба</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', fontWeight: 'bold' }}>доб. 201</td>
                        </tr>
                        <tr style={{ backgroundColor: '#F5F5F5' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Химическая авария / Утечка</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', fontWeight: 'bold' }}>доб. 501</td>
                        </tr>
                        <tr style={{ backgroundColor: '#FFFFFF' }}>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>Дирекция (экстренная связь)</td>
                          <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', fontWeight: 'bold' }}>доб. 300</td>
                        </tr>
                      </tbody>
                    </table>

                    <div style={{
                      backgroundColor: '#FFFF99',
                      border: '1px solid #000000',
                      padding: '10px',
                      fontSize: '11px',
                      fontFamily: 'Arial, sans-serif',
                      color: '#000000',
                      marginTop: '20px'
                    }}>
                      <p style={{ margin: '0 0 8px 0' }}>
                        <strong>ИНФОРМАЦИЯ ДЛЯ ПОСЕТИТЕЛЕЙ:</strong> Все посетители обязаны зарегистрироваться на стойке ресепшена административного корпуса. При себе иметь документ удостоверяющий личность. Нахождение на территории комплекса без сопровождения уполномоченного сотрудника не допускается. Временный пропуск посетителя действителен исключительно в пределах административного корпуса.
                      </p>
                      <p style={{ margin: '0 0 8px 0' }}>
                        Посещение исследовательских корпусов и подземных секторов возможно только при наличии официального приглашения и соответствующего уровня допуска.
                      </p>
                      <p style={{ margin: '0' }}>
                        По вопросам организации визита обращаться: доб. 100.
                      </p>
                    </div>
                  </div>
                )}
                </>
                )}
              </td>
            </tr>
          </tbody>
        </table>

        {/* Footer */}
        <table width="1200" cellPadding="0" cellSpacing="0" border={0} style={{ backgroundColor: '#2A2A2A' }}>
          <tbody>
            <tr>
              <td style={{ padding: '12px 20px' }}>
                <div style={{
                  fontSize: '10px',
                  fontFamily: 'Arial, sans-serif',
                  color: '#FFFFFF',
                  textAlign: 'left'
                }}>
                  Корпорация Synthetical Science, 2003 г. Все права защищены.
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}