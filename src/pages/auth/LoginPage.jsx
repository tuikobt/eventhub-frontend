import React, { useState } from 'react';
import FloatingInput from '../../components/forms/FloatingInput';
import Button from '../../components/common/Button';
import Checkbox from '../../components/common/Checkbox';
import SocialButton from '../../components/common/SocialButton';
import { useAuth } from '../../hooks/useAuth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const { loading, error, login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await login(email, password);
    if (resultAction.meta?.requestStatus === 'fulfilled') {
      alert('Đăng nhập thành công!');
    }
  };

  return (
    <div className="bg-background font-body-md text-text-main antialiased min-h-screen flex w-full">
      {/* Left Side: Visual/Branding (Hidden on mobile, 40% on desktop) */}
      <div className="hidden lg:flex lg:w-2/5 relative overflow-hidden flex-col justify-end p-xl">
        <img
          alt="EventHub Banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80"
        />
        {/* Dark overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-surface-dark/60 backdrop-blur-sm z-10"></div>
        <div className="relative z-20 space-y-md fade-in text-on-primary">
          <div className="flex items-center gap-xs mb-sm">
            <h1 className="font-display-lg text-display-lg text-surface-white font-black text-[32px] leading-[40px]">
              EventHub
            </h1>
          </div>
          <p className="font-headline-md text-headline-md text-surface-white/90">
            Chào mừng trở lại! 
          </p>
          <p className="font-body-lg text-body-lg text-surface-white/70">
            Khám phá sự kiện tiếp theo của bạn và quản lý trải nghiệm không giới hạn.
          </p>
        </div>
      </div>

      {/* Right Side: Login Form (100% on mobile, 60% on desktop) */}
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center p-margin-mobile lg:p-margin-desktop bg-surface-white overflow-y-auto min-h-screen relative z-30">
        <div className="w-full max-w-lg space-y-lg flex flex-col items-stretch justify-center px-sm">
          {/* Mobile Brand Header */}
          <div className="lg:hidden text-center mb-xl fade-in w-full">
            <div className="flex items-center justify-center gap-xs">
              <h1 className="font-display-lg text-display-lg font-black text-primary text-[32px] leading-[40px]">
                EventHub
              </h1>
            </div>
          </div>

          {/* Form Header */}
          <div className="fade-in delay-100 w-full text-left">
            <h1 className="font-display-lg text-display-lg text-text-main font-black">Đăng nhập</h1>
            <p className="font-body-md text-body-md text-text-muted mt-base">
              Vui lòng đăng nhập để quản lý sự kiện của bạn.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-error-container text-on-error-container p-sm rounded-DEFAULT text-sm w-full border border-error/20 fade-in">
              {error}
            </div>
          )}

          <form className="space-y-md fade-in delay-200 w-full" onSubmit={handleSubmit}>
            {/* Email */}
            <FloatingInput
              id="email"
              name="email"
              label="Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />

            {/* Password */}
            <FloatingInput
              id="password"
              name="password"
              label="Mật khẩu"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />

            {/* Options */}
            <div className="flex items-center justify-between w-full">
              <Checkbox
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                label="Ghi nhớ đăng nhập"
              />
              <a
                className="font-label-md text-label-md text-primary hover:text-primary-container transition-colors duration-200"
                href="#forgot-password"
              >
                Quên mật khẩu?
              </a>
            </div>

            {/* Submit Button */}
            <Button type="submit" variant="primary" icon="arrow_forward" disabled={loading}>
              {loading ? 'Đang xử lý...' : 'Đăng nhập'}
            </Button>
          </form>

          {/* Footer */}
          <div className="text-center mt-lg fade-in delay-300 w-full">
            <p className="font-body-md text-body-md text-text-muted">
              Chưa có tài khoản?{' '}
              <a
                className="text-primary font-label-md text-label-md hover:underline transition-all"
                href="#register"
              >
                Đăng ký ngay
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
