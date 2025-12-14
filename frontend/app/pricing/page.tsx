import Link from 'next/link'
import { FileText, Check, ArrowRight, Zap, TrendingUp, Building2 } from 'lucide-react'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'

export const metadata = {
  title: 'Pricing - DocUtility',
  description: 'Simple, developer-friendly pricing. Pay only for what you use.',
}

export default function PricingPage() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for testing and small projects',
      icon: Zap,
      color: 'blue',
      features: [
        '100 requests/day',
        'All endpoints',
        'Community support',
        'No credit card required',
        'Basic rate limits'
      ],
      cta: 'Start Free',
      href: '/dashboard/metadata',
      popular: false
    },
    {
      name: 'Starter',
      price: '$9',
      period: '/month',
      description: 'For small teams and growing applications',
      icon: TrendingUp,
      color: 'green',
      features: [
        '10,000 requests/month',
        'All endpoints',
        'Higher rate limits',
        'Email support',
        'Usage analytics',
        'Priority processing'
      ],
      cta: 'Get Started',
      href: '/dashboard/metadata',
      popular: true
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      description: 'For production applications at scale',
      icon: Building2,
      color: 'purple',
      features: [
        '100,000 requests/month',
        'All endpoints',
        'Highest rate limits',
        'Priority email support',
        'Advanced analytics',
        '99.9% SLA guarantee',
        'Custom integrations'
      ],
      cta: 'Go Pro',
      href: '/dashboard/metadata',
      popular: false
    }
  ]

  const faqs = [
    {
      question: 'What happens if I exceed my monthly limit?',
      answer: 'Your requests will be rate-limited until the next billing cycle. Upgrade anytime to increase your limits. We\'ll notify you when you reach 80% of your quota.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, absolutely. Cancel anytime with one click. No questions asked, no penalties. Your plan remains active until the end of your billing period.'
    },
    {
      question: 'Do you offer annual billing?',
      answer: 'Yes! Save 20% with annual billing. Contact us for annual pricing details.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express) via Stripe. Enterprise customers can pay via invoice.'
    },
    {
      question: 'Is there a free trial for paid plans?',
      answer: 'The Free plan is available forever with no time limit. Test all features before upgrading to a paid plan.'
    },
    {
      question: 'What counts as one request?',
      answer: 'Each API call to any endpoint counts as one request. File size doesn\'t affect request count.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <FileText className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-900">DocUtility</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/docs" className="text-slate-600 hover:text-slate-900 transition-colors">
                Docs
              </Link>
              <Link href="/dashboard/metadata">
                <Button>Try Free</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Simple, Developer-Friendly Pricing
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Pay only for what you use. No hidden fees, no surprises.
          </p>
          <p className="text-slate-500">
            Start free, upgrade when you need more. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const Icon = plan.icon
              return (
                <Card 
                  key={plan.name} 
                  className={`relative ${
                    plan.popular 
                      ? 'border-2 border-blue-500 shadow-xl' 
                      : 'border-slate-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${plan.color}-100 mb-4`}>
                      <Icon className={`w-8 h-8 text-${plan.color}-600`} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-slate-900">
                        {plan.price}
                      </span>
                      <span className="text-slate-500 ml-2">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={plan.href}>
                    <Button 
                      className="w-full" 
                      variant={plan.popular ? 'primary' : 'outline'}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Need More?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Contact us for enterprise pricing with custom limits, dedicated support, and SLA guarantees.
          </p>
          <Link href="/contact">
            <Button variant="outline" className="text-lg px-8 py-3">
              Contact Sales
            </Button>
          </Link>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Compare Plans
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-4 text-slate-900 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 text-slate-900 font-semibold">Free</th>
                  <th className="text-center py-4 px-4 text-slate-900 font-semibold">Starter</th>
                  <th className="text-center py-4 px-4 text-slate-900 font-semibold">Pro</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 text-slate-700">Requests per month</td>
                  <td className="text-center py-4 px-4">3,000</td>
                  <td className="text-center py-4 px-4">10,000</td>
                  <td className="text-center py-4 px-4">100,000</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 text-slate-700">All endpoints</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 text-slate-700">Rate limit</td>
                  <td className="text-center py-4 px-4">60/min</td>
                  <td className="text-center py-4 px-4">120/min</td>
                  <td className="text-center py-4 px-4">300/min</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 text-slate-700">Max file size</td>
                  <td className="text-center py-4 px-4">5MB</td>
                  <td className="text-center py-4 px-4">10MB</td>
                  <td className="text-center py-4 px-4">25MB</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 text-slate-700">Support</td>
                  <td className="text-center py-4 px-4">Community</td>
                  <td className="text-center py-4 px-4">Email</td>
                  <td className="text-center py-4 px-4">Priority</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 text-slate-700">Analytics</td>
                  <td className="text-center py-4 px-4">Basic</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 text-slate-700">SLA</td>
                  <td className="text-center py-4 px-4">-</td>
                  <td className="text-center py-4 px-4">-</td>
                  <td className="text-center py-4 px-4">99.9%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-slate-600">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">
              Still have questions?
            </p>
            <Link href="/contact">
              <Button variant="outline">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start with our free plan. No credit card required.
          </p>
          <Link href="/dashboard/metadata">
            <Button variant="secondary" className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-blue-50">
              Start Free Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="w-6 h-6 text-blue-400" />
                <span className="text-white font-bold text-lg">DocUtility</span>
              </div>
              <p className="text-sm">
                Clean, validate & standardize documents automatically via API or UI.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/docs" className="hover:text-white transition-colors">API Docs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; 2024 DocUtility. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}