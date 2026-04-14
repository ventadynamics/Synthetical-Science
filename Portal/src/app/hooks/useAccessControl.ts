import { useState, useEffect } from 'react';

// Страницы, которые НЕ требуют код доступа
const PUBLIC_PAGES = ['about'];
const PUBLIC_SPECIAL_PAGES = ['home', 'contacts']; // home и contacts доступны без кода

export function useAccessControl(currentTab: string, currentPage: string, onCancel: () => void) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [pendingTab, setPendingTab] = useState<string | null>(null);

  useEffect(() => {
    // Проверяем специальные страницы (portal, contacts)
    if (currentPage !== 'home') {
      const isPublicSpecialPage = PUBLIC_SPECIAL_PAGES.includes(currentPage);
      
      if (isPublicSpecialPage) {
        // Публичная специальная страница (contacts)
        setIsAuthenticated(true);
        setShowModal(false);
        setPendingTab(null);
      } else {
        // Защищенная специальная страница (portal)
        const authStatus = sessionStorage.getItem('ssc_authenticated');
        
        if (authStatus === 'true') {
          setIsAuthenticated(true);
          setShowModal(false);
          setPendingTab(null);
        } else {
          setIsAuthenticated(false);
          setShowModal(true);
          setPendingTab(currentPage);
        }
      }
      return;
    }

    // Проверяем обычные табы
    const isPublicPage = PUBLIC_PAGES.includes(currentTab);
    
    if (isPublicPage) {
      // Публичная страница - доступ разрешен
      setIsAuthenticated(true);
      setShowModal(false);
      setPendingTab(null);
    } else {
      // Защищенная страница - проверяем авторизацию
      const authStatus = sessionStorage.getItem('ssc_authenticated');
      
      if (authStatus === 'true') {
        setIsAuthenticated(true);
        setShowModal(false);
        setPendingTab(null);
      } else {
        // Показываем модальное окно, но не переходим на страницу
        setIsAuthenticated(false);
        setShowModal(true);
        setPendingTab(currentTab);
      }
    }
  }, [currentTab, currentPage]);

  const handleAuthSuccess = () => {
    sessionStorage.setItem('ssc_authenticated', 'true');
    setIsAuthenticated(true);
    setShowModal(false);
    setPendingTab(null);
  };

  const handleAuthCancel = () => {
    setShowModal(false);
    setPendingTab(null);
    onCancel(); // Возвращаемся на главную
  };

  return {
    isAuthenticated,
    showModal,
    handleAuthSuccess,
    handleAuthCancel
  };
}
