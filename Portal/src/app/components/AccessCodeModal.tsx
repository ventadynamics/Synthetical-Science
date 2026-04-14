import { useState } from 'react';
import { track } from '@vercel/analytics';

interface AccessCodeModalProps {
  onSuccess: () => void;
  onCancel: () => void;
}

export default function AccessCodeModal({ onSuccess, onCancel }: AccessCodeModalProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Простая проверка кода (можно изменить на любой код)
    if (code === 'ZR1234') {
      // Отслеживание успешного входа
      track('access_code_success', {
        code: code
      });
      onSuccess();
    } else {
      // Отслеживание неудачной попытки
      track('access_code_failed', {
        attempted_code: code
      });
      setError('Неверный код доступа');
      setCode('');
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(26, 58, 92, 0.85)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        border: '3px solid #1A3A5C',
        width: '450px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
      }}>
        {/* Header */}
        <div style={{
          backgroundColor: '#1A3A5C',
          color: '#FFFFFF',
          padding: '15px 20px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '14px',
          fontWeight: 'bold',
          borderBottom: '2px solid #4A90E2'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <img 
              src="/SS_logo_transparent.png" 
              alt="SSC Logo"
              style={{
                height: '50px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          
          </div>
        </div>

        {/* Content */}
        <div style={{
          padding: '25px',
          backgroundColor: '#FFFFFF'
        }}>
          <div style={{
            backgroundColor: '#FFF3CD',
            border: '2px solid #FFC107',
            padding: '12px',
            marginBottom: '20px',
            fontFamily: 'Arial, sans-serif',
            fontSize: '12px',
            color: '#856404'
          }}>
            <strong>ОБРАТИТЕ ВНИМАНИЕ:</strong> если код утерян, то вам необходимо обратиться в отдел собственной безопасности (корпус А, каб. 100) с пропуском.
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontFamily: 'Arial, sans-serif',
                fontSize: '12px',
                fontWeight: 'bold',
                color: '#1A3A5C'
              }}>
                Личный код доступа:
              </label>
              <input
                type="password"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setError('');
                }}
                placeholder="Введите код..."
                style={{
                  width: '100%',
                  padding: '10px',
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '14px',
                  border: '2px solid #D4D0C8',
                  backgroundColor: '#FFFFFF',
                  boxSizing: 'border-box'
                }}
                autoFocus
              />
            </div>

            {error && (
              <div style={{
                backgroundColor: '#F8D7DA',
                border: '2px solid #DC3545',
                color: '#721C24',
                padding: '10px',
                marginBottom: '20px',
                fontFamily: 'Arial, sans-serif',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                {error}
              </div>
            )}

            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '10px'
            }}>
              <button
                type="button"
                onClick={onCancel}
                style={{
                  padding: '10px 30px',
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  backgroundColor: '#E8E8E8',
                  color: '#333333',
                  border: '1px solid #808080',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#D4D0C8'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#E8E8E8'}
              >
                ОТМЕНА
              </button>
              <button
                type="submit"
                style={{
                  padding: '10px 30px',
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  backgroundColor: '#1A3A5C',
                  color: '#FFFFFF',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2A4A6C'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1A3A5C'}
              >
                ВОЙТИ
              </button>
            </div>
          </form>

          
        </div>

        {/* Footer */}
        <div style={{
          backgroundColor: '#E8E8E8',
          padding: '10px 20px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '10px',
          color: '#666666',
          borderTop: '1px solid #D4D0C8'
        }}>
          Корпорация Synthetical Science, 2003 г. Все права защищены.
        </div>
      </div>
    </div>
  );
}
