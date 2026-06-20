export const statsData = [
  { id: '1', label: 'Active Advertisers', value: '1,840+', change: '+12.4%', isPositive: true },
  { id: '2', label: 'Monthly Reach', value: '4.2M', change: '+24.1%', isPositive: true },
  { id: '3', label: 'Total Impressions', value: '84.6M', change: '+18.9%', isPositive: true },
  { id: '4', label: 'Campaign Success Rate', value: '94.2%', change: '+2.3%', isPositive: true },
];

export const adSolutions = [
  {
    id: 'sol-1',
    title: 'Social Feed Ads',
    description: 'Native card placements appearing directly within the user\'s activity feed with organic styling.',
    features: ['Native Feed Placement', 'High Engagement CTR', 'Coin-Based Promotion Boost'],
    metric: 'Avg. CTR: 3.4%'
  },
  {
    id: 'sol-2',
    title: 'Premium Banner Ads',
    description: 'High-visibility billboard and sidebar spaces across the Homepage, Marketplace, and Dashboard.',
    features: ['Homepage Premium Slots', 'Sidebar Sticky Placement', 'Marketplace Direct Banner'],
    metric: 'Impression-heavy'
  },
  {
    id: 'sol-3',
    title: 'In-Stream Video Ads',
    description: 'Immersive video placements optimized for gaming previews, creator channels, and reward setups.',
    features: ['Auto Play Video Preview', 'Gaming Stream Promotions', 'Rewarded Opt-in Campaigns'],
    metric: 'Completion: 78%'
  },
  {
    id: 'sol-4',
    title: 'Immersive Story Ads',
    description: 'Full-screen mobile vertical canvas that prompts swipe actions directly to your conversion landing page.',
    features: ['Full Screen Format', 'Direct Swipe Actions', 'High CTR Optimization'],
    metric: 'Mobile Optimized'
  },
  {
    id: 'sol-5',
    title: 'Sponsored Content Posts',
    description: 'Collaborate with ecosystem creators to publish deep-dive reviews, tutorials, or updates.',
    features: ['Native Content Integration', 'Direct Creator Collaboration', 'Audience Trust Authority'],
    metric: 'High Conversion'
  }
];

export const campaignTypes = [
  {
    id: 'camp-awareness',
    title: 'Brand Awareness',
    description: 'Maximize your visibility and reach the broadest cross-section of the E-Rupai ecosystem.',
    estReach: '500k+ Users / Week',
    bestFor: 'Product launches, public announcements, brand building.'
  },
  {
    id: 'camp-traffic',
    title: 'Website Traffic',
    description: 'Drive high-intent consumers and platform users directly to your landing pages or outside applications.',
    estReach: '80k - 120k Clicks',
    bestFor: 'E-commerce storefronts, blogs, documentation pages.'
  },
  {
    id: 'camp-app',
    title: 'App Promotion',
    description: 'Encourage direct installations, updates, or account creation metrics inside external dApps or utilities.',
    estReach: '15k+ Conversions',
    bestFor: 'Mobile apps, wallet integrations, game launches.'
  },
  {
    id: 'camp-leads',
    title: 'Lead Generation',
    description: 'Gather premium prospects with highly targeted sign-up modules pre-populated with account emails.',
    estReach: '5k - 10k Premium Leads',
    bestFor: 'B2B utilities, early-access waiting lists, newsletters.'
  },
  {
    id: 'camp-sales',
    title: 'Product Sales',
    description: 'Direct conversion campaigns targeted directly at active coin spenders and marketplace shoppers.',
    estReach: 'Dependant on Product',
    bestFor: 'Merchandise sales, digital assets, premium license activations.'
  }
];

export const pricingPlans = [
  {
    name: 'Starter',
    priceFiat: '$149',
    priceCoin: '1,490',
    description: 'Perfect for small businesses or independent creators testing ecosystem ads.',
    features: [
      'Basic Behavioral Targeting',
      'Standard Ad Placement (Sidebar/Feed)',
      'Self-service Campaign Manager',
      'Standard Email Support',
      'Basic Report Exports (CSV)'
    ],
    isPopular: false,
    cta: 'Start Campaign'
  },
  {
    name: 'Growth',
    priceFiat: '$499',
    priceCoin: '4,500',
    description: 'Optimized for rapidly scaling brands looking for maximum continuous visibility.',
    features: [
      'Advanced Multi-Layer Targeting',
      'Priority Placements (Hero, Video Slots)',
      'Real-Time Analytics Dashboard Access',
      'Priority Response Support (<12h)',
      'Custom API Webhook Integration',
      '10% Coin Payment Discount Included'
    ],
    isPopular: true,
    cta: 'Scale Your Brand'
  },
  {
    name: 'Enterprise',
    priceFiat: '$1,299',
    priceCoin: '11,500',
    description: 'Custom setups for major corporations, gaming networks, and official ecosystem partners.',
    features: [
      'Omnichannel Premium Placements',
      'Dedicated Account Manager assigned',
      'Full Analytics Suite with Cohort Insights',
      'Custom Smart-Contract Automation',
      'Early Access to New Platform Formats',
      'White-glove Creative Ad Support'
    ],
    isPopular: false,
    cta: 'Contact Sales Team'
  }
];