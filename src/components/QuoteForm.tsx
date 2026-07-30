'use client';

import { useState } from 'react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'signage',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('يرجى ملء الاسم ورقم الجوال');
      return;
    }

    setStatus('submitting');
    
    // Simulate API submission
    setTimeout(() => {
      // Create WhatsApp message string
      const serviceNames: Record<string, string> = {
        signage: 'اللوحات الإعلانية الخارجية 3D',
        exhibitions: 'ستاندات وتجهيز معارض ومؤتمرات',
        branding: 'تصميم الهوية البصرية وشعارات',
        stickers: 'ستيكرات وتغليف سيارات',
        printing: 'أعمال الزخارف والهدايا التذكارية',
        indoor: 'لوحات داخلية للمكاتب والبنوك'
      };
      
      const whatsappMsg = `مرحباً شركة إشراق للدعاية والإعلان، أود طلب معاينة/استشارة مجانية:\n` +
                          `• الاسم: ${formData.name}\n` +
                          `• الجوال: ${formData.phone}\n` +
                          `• الخدمة المطلوبة: ${serviceNames[formData.service]}\n` +
                          `• التفاصيل: ${formData.message || 'لا توجد تفاصيل إضافية'}`;
      
      const encodedMsg = encodeURIComponent(whatsappMsg);
      const whatsappUrl = `https://wa.me/966530906352?text=${encodedMsg}`;
      
      setStatus('success');
      // Redirect to WhatsApp
      window.open(whatsappUrl, '_blank');
      
      setFormData({
        name: '',
        phone: '',
        service: 'signage',
        message: '',
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      {status === 'success' && (
        <div style={{
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid var(--success)',
          color: 'var(--success)',
          padding: '16px',
          borderRadius: 'var(--radius-md)',
          marginBottom: '20px',
          fontSize: '15px',
          fontWeight: '600'
        }}>
          تم تحضير الطلب بنجاح! سيتم تحويلك إلى واتساب الآن للتواصل مع المسؤول ومتابعة المعاينة.
        </div>
      )}

      <div className="form-group">
        <label className="form-label" htmlFor="name">الاسم الكريم *</label>
        <input
          type="text"
          id="name"
          className="form-control"
          placeholder="أدخل اسمك بالكامل"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          disabled={status === 'submitting'}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="phone">رقم الجوال *</label>
        <input
          type="tel"
          id="phone"
          className="form-control"
          placeholder="مثال: 053XXXXXXX"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          disabled={status === 'submitting'}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="service">الخدمة المطلوبة *</label>
        <select
          id="service"
          className="form-control"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          disabled={status === 'submitting'}
          style={{ appearance: 'none', background: 'var(--bg-secondary) url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%23d4af37\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e") no-repeat left 12px center/18px' }}
        >
          <option value="signage">اللوحات الإعلانية الخارجية 3D</option>
          <option value="exhibitions">ستاندات وتجهيز المعارض والمؤتمرات</option>
          <option value="branding">تصميم الهوية البصرية وشعارات</option>
          <option value="stickers">ستيكرات وتغليف سيارات</option>
          <option value="printing">أعمال الزخارف والهدايا التذكارية</option>
          <option value="indoor">لوحات داخلية للمكاتب والبنوك</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="message">تفاصيل أو مقاسات أولية (اختياري)</label>
        <textarea
          id="message"
          rows={4}
          className="form-control"
          placeholder="اكتب أي تفاصيل بخصوص المقاسات أو المواد المطلوبة..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          disabled={status === 'submitting'}
          style={{ resize: 'vertical' }}
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: '100%', marginTop: '10px' }}
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'جاري تحضير طلبك...' : 'طلب معاينة مجانية عبر واتساب'}
      </button>
    </form>
  );
}
