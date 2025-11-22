import React, { useState } from 'react';
import QTreeLogo from '../../assets/images/logo/qtree-logo.png';

const iconColor = "#556C43";
const iconSize = 24;

const EnvelopeIcon = () => (
  <svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 24 24">
    <path stroke={iconColor} strokeWidth="2" d="M4 6h16v12H4z" />
    <path stroke={iconColor} strokeWidth="2" d="M4 6l8 7 8-7" />
  </svg>
);

const LockIcon = () => (
  <svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 24 24">
    <rect x="5" y="11" width="14" height="8" rx="2" stroke={iconColor} strokeWidth="2"/>
    <path stroke={iconColor} strokeWidth="2" d="M8 11V8a4 4 0 1 1 8 0v3"/>
  </svg>
);

const EyeIcon = ({ open }) => open ? (
  <svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 24 24">
    <ellipse cx="12" cy="12" rx="7" ry="5" stroke={iconColor} strokeWidth="2"/>
    <circle cx="12" cy="12" r="2" fill={iconColor}/>
  </svg>
) : (
  <svg width={iconSize} height={iconSize} fill="none" viewBox="0 0 24 24">
    <ellipse cx="12" cy="12" rx="7" ry="5" stroke={iconColor} strokeWidth="2"/>
    <path stroke={iconColor} strokeWidth="2" d="M4 4l16 16"/>
  </svg>
);

const GoogleIcon = () => (
  <svg width={20} height={20} viewBox="0 0 48 48">
    <g>
      <path fill="#FFC107" d="M43.6 20.5h-1.9V20H24v8h11.2c-1.6 4.3-5.7 7-11.2 7-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l6-5.8C34.5 5.1 29.5 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20c11.1 0 20-8.9 20-20 0-1.3-.1-2.7-.4-4.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.3 16.1 18.8 13 24 13c3 0 5.7 1.1 7.8 2.9l6-5.8C34.5 5.1 29.5 3 24 3 15.3 3 7.8 8.7 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 43c5.3 0 10.2-1.8 13.9-4.9l-6.4-5.2C29.6 34.7 27 35.7 24 35.7c-5.5 0-10.2-3.7-11.8-8.8l-6.6 5.1C7.8 39.3 15.3 43 24 43z"/>
      <path fill="#1976D2" d="M43.6 20.5h-1.9V20H24v8h11.2c-0.7 2-2.1 3.7-4 4.9l6.4 5.2c1.9-1.8 3.4-4.2 4-7.1 0.3-1.8 0.4-3.2 0.4-4.5z"/>
    </g>
  </svg>
);

const LoginPage = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) onLogin();
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: 360,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 16px'
        }}
      >
        <div style={{ marginBottom: 48, marginTop: 80, textAlign: 'center' }}>
          <img
            src={QTreeLogo}
            alt="QTree Logo"
            style={{
              width: 160,
              height: 160,
              marginBottom: 16,
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          />
          <p style={{ color: iconColor, fontSize: 18, marginTop: 8 }}>Welcome back</p>
        </div>

        <div style={{ width: '100%', marginBottom: 24 }}>
          <label htmlFor="email" style={{ color: iconColor, fontWeight: 500, fontSize: 18, marginBottom: 8, display: 'block' }}>Email</label>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: '#D1E2C6',
            borderRadius: 20,
            padding: '12px 16px',
            marginTop: 4
          }}>
            <EnvelopeIcon />
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              style={{
                border: 'none',
                background: 'transparent',
                marginLeft: 12,
                fontSize: 18,
                color: iconColor,
                width: '100%',
                outline: 'none'
              }}
            />
          </div>
        </div>

        <div style={{ width: '100%', marginBottom: 16 }}>
          <label htmlFor="password" style={{ color: iconColor, fontWeight: 500, fontSize: 18, marginBottom: 8, display: 'block' }}>Password</label>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: '#D1E2C6',
            borderRadius: 20,
            padding: '12px 16px',
            marginTop: 4
          }}>
            <LockIcon />
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              required
              style={{
                border: 'none',
                background: 'transparent',
                marginLeft: 12,
                fontSize: 18,
                color: iconColor,
                width: '100%',
                outline: 'none'
              }}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              style={{
                background: 'none',
                border: 'none',
                marginLeft: 12,
                cursor: 'pointer',
                padding: 0
              }}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              <EyeIcon open={showPassword} />
            </button>
          </div>
        </div>

        <div style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 32
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              style={{
                accentColor: iconColor,
                width: 18,
                height: 18,
                marginRight: 6
              }}
            />
            <label htmlFor="remember_me" style={{ color: iconColor, fontSize: 16 }}>
              Remember me?
            </label>
          </div>
          <a href="#" style={{ color: iconColor, fontSize: 16, textDecoration: 'none', fontWeight: 500 }}>
            Forgot Password
          </a>
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px 0',
            borderRadius: 24,
            background: '#D1E2C6',
            color: iconColor,
            fontWeight: 600,
            fontSize: 18,
            border: 'none',
            marginBottom: 24,
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            cursor: 'pointer'
          }}
        >
          Log in
        </button>

        <button
          type="button"
          style={{
            width: '100%',
            padding: '12px 0',
            borderRadius: 24,
            background: '#fff',
            color: iconColor,
            fontWeight: 500,
            fontSize: 18,
            border: '2px solid #D1E2C6',
            marginBottom: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            cursor: 'pointer'
          }}
        >
          <GoogleIcon />
          Log in with Google
        </button>

        <div style={{ textAlign: 'center', width: '100%' }}>
          <span style={{ color: '#7A9B6A', fontSize: 16 }}>
            Don't have an account?{' '}
            <a href="#" style={{ color: iconColor, fontWeight: 700, textDecoration: 'none' }}>
              Sign up
            </a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;