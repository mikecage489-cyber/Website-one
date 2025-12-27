import { Tool, ToolCategoryInfo } from '../types/Tool'

export const toolCategories: ToolCategoryInfo[] = [
  {
    id: 'text',
    name: 'Text Tools',
    description: 'Powerful text manipulation and analysis tools',
    icon: '📝',
  },
  {
    id: 'calculator',
    name: 'Calculator Tools',
    description: 'Quick and accurate calculators for everyday use',
    icon: '🧮',
  },
  {
    id: 'converter',
    name: 'Converter Tools',
    description: 'Convert units, currencies, and more',
    icon: '🔄',
  },
  {
    id: 'seo',
    name: 'SEO Tools',
    description: 'Optimize your website for search engines',
    icon: '🚀',
  },
  {
    id: 'developer',
    name: 'Developer Tools',
    description: 'Essential tools for developers',
    icon: '💻',
  },
]

export const tools: Tool[] = [
  // Text Tools
  {
    id: 'word-counter',
    name: 'Word Counter',
    category: 'text',
    description: 'Count words, characters, sentences, and paragraphs in your text',
    longDescription: `Our free Word Counter tool helps you analyze text quickly and accurately. Whether you're writing an essay, blog post, or social media content, this tool provides instant statistics about your text including word count, character count (with and without spaces), sentence count, paragraph count, and reading time estimation.

Perfect for writers, students, bloggers, and content creators who need to meet specific word count requirements or optimize their content length. The tool works entirely in your browser, ensuring your text remains private and secure.

This word counter also calculates reading time based on average reading speed, helping you understand how long it will take readers to consume your content. It's an essential tool for SEO optimization and content marketing strategies.`,
    icon: '📝',
    keywords: ['word counter', 'character counter', 'text analyzer', 'word count tool', 'character count', 'text statistics'],
    component: 'WordCounter',
    examples: [
      'Paste your essay to check if it meets the required word count',
      'Analyze blog post length for SEO optimization',
      'Count characters for social media posts with character limits',
    ],
    faqs: [
      {
        question: 'How accurate is the word counter?',
        answer: 'Our word counter is highly accurate and counts words based on standard definitions, separating them by spaces and punctuation.',
      },
      {
        question: 'Does the tool save my text?',
        answer: 'No, all processing happens in your browser. Your text is never sent to any server, ensuring complete privacy.',
      },
      {
        question: 'Can I count words in different languages?',
        answer: 'Yes, the word counter works with all languages and character sets, including special characters and emojis.',
      },
    ],
    relatedTools: ['case-converter', 'text-cleaner'],
  },
  {
    id: 'case-converter',
    name: 'Case Converter',
    category: 'text',
    description: 'Convert text to uppercase, lowercase, title case, and more',
    longDescription: `The Case Converter tool is a versatile text transformation utility that allows you to quickly change the case of any text. Convert between uppercase, lowercase, title case, sentence case, and alternating case with just one click.

This tool is perfect for developers, writers, and anyone who needs to format text consistently. Whether you're working on code, writing content, or preparing documents, the case converter saves you time and ensures consistency across your text.

All conversions happen instantly in your browser, and the tool supports all languages and special characters. It's especially useful for fixing text that was typed with caps lock on, converting database entries, or preparing text for different contexts.`,
    icon: '🔤',
    keywords: ['case converter', 'uppercase', 'lowercase', 'title case', 'text transform', 'capitalization'],
    component: 'CaseConverter',
    examples: [
      'Convert all caps text to normal case',
      'Transform lowercase to title case for headings',
      'Fix text typed with caps lock enabled',
    ],
    faqs: [
      {
        question: 'What is title case?',
        answer: 'Title case capitalizes the first letter of each major word while keeping minor words like "and," "of," and "the" in lowercase (except at the beginning).',
      },
      {
        question: 'Does this work with non-English text?',
        answer: 'Yes, the case converter works with all Unicode characters and supports multiple languages.',
      },
    ],
    relatedTools: ['word-counter', 'text-cleaner'],
  },
  {
    id: 'text-cleaner',
    name: 'Text Cleaner',
    category: 'text',
    description: 'Remove extra spaces, line breaks, and special characters from text',
    longDescription: `The Text Cleaner tool helps you clean and format text by removing unwanted characters, extra spaces, line breaks, and special symbols. It's an essential utility for anyone working with text that needs to be cleaned up before use.

This tool offers multiple cleaning options including removing extra whitespace, eliminating line breaks, stripping HTML tags, removing special characters, and normalizing Unicode characters. You can apply multiple cleaning operations at once or use them individually based on your needs.

Perfect for cleaning copied text from PDFs, web pages, or documents that contain formatting artifacts. The text cleaner ensures your content is clean, consistent, and ready to use in any application or platform.`,
    icon: '🧹',
    keywords: ['text cleaner', 'remove spaces', 'clean text', 'format text', 'remove line breaks'],
    component: 'TextCleaner',
    examples: [
      'Clean text copied from PDF files',
      'Remove extra spaces and line breaks',
      'Strip HTML tags from formatted text',
    ],
    faqs: [
      {
        question: 'What characters are removed?',
        answer: 'You can choose which characters to remove, including extra spaces, line breaks, tabs, HTML tags, and special characters.',
      },
      {
        question: 'Will this remove all formatting?',
        answer: 'The tool only removes what you specify. You have full control over which cleaning operations to apply.',
      },
    ],
    relatedTools: ['word-counter', 'case-converter'],
  },

  // Calculator Tools
  {
    id: 'percentage-calculator',
    name: 'Percentage Calculator',
    category: 'calculator',
    description: 'Calculate percentages, percentage increase/decrease, and more',
    longDescription: `Our Percentage Calculator is a comprehensive tool for all your percentage calculation needs. Calculate percentages, find percentage increases or decreases, determine what percentage one number is of another, and more.

This calculator is perfect for students, business professionals, and anyone who needs to work with percentages. Whether you're calculating discounts, tax amounts, grade percentages, or financial ratios, this tool provides accurate results instantly.

The percentage calculator includes multiple calculation modes: calculate X% of Y, find what percentage X is of Y, calculate percentage increase/decrease, and determine the original value before a percentage change. All calculations are performed in real-time as you type.`,
    icon: '📊',
    keywords: ['percentage calculator', 'percent', 'calculate percentage', 'percentage increase', 'discount calculator'],
    component: 'PercentageCalculator',
    examples: [
      'Calculate 15% tip on a restaurant bill',
      'Find percentage discount on sale items',
      'Calculate percentage increase in salary',
    ],
    faqs: [
      {
        question: 'How do I calculate percentage increase?',
        answer: 'Subtract the original value from the new value, divide by the original value, and multiply by 100.',
      },
      {
        question: 'What is the difference between percentage and percentile?',
        answer: 'Percentage is a fraction of 100, while percentile ranks values in a dataset.',
      },
    ],
    relatedTools: ['age-calculator', 'bmi-calculator'],
  },
  {
    id: 'age-calculator',
    name: 'Age Calculator',
    category: 'calculator',
    description: 'Calculate age in years, months, days, and more',
    longDescription: `The Age Calculator is a precise tool for calculating age from a birth date to any given date. It provides detailed age information including years, months, days, hours, and even seconds since birth.

This tool is useful for various purposes including birthday planning, age verification, calculating work experience duration, or simply satisfying curiosity about exact age. The calculator can also determine age at any past or future date, making it versatile for different scenarios.

Beyond simple age calculation, the tool shows interesting statistics like total days lived, total hours, and upcoming milestones. It's perfect for parents tracking their child's age, HR professionals calculating service years, or anyone interested in precise time calculations.`,
    icon: '🎂',
    keywords: ['age calculator', 'calculate age', 'birth date', 'age in days', 'how old am I'],
    component: 'AgeCalculator',
    examples: [
      'Calculate exact age from birth date',
      'Find age on a specific date in the past',
      'Calculate duration between two dates',
    ],
    faqs: [
      {
        question: 'Does the calculator account for leap years?',
        answer: 'Yes, the age calculator accurately accounts for leap years in its calculations.',
      },
      {
        question: 'Can I calculate age in the future?',
        answer: 'Yes, you can select any future date to see how old someone will be at that time.',
      },
    ],
    relatedTools: ['percentage-calculator', 'bmi-calculator'],
  },
  {
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    category: 'calculator',
    description: 'Calculate Body Mass Index and get health insights',
    longDescription: `The BMI (Body Mass Index) Calculator is a health assessment tool that calculates your BMI based on height and weight. BMI is a widely used metric to assess whether someone has a healthy body weight for their height.

This calculator supports both metric (kg, cm) and imperial (lbs, inches) units, making it accessible to users worldwide. It not only calculates your BMI but also provides interpretation according to WHO standards, showing whether you're underweight, normal weight, overweight, or obese.

Understanding your BMI can help you make informed decisions about your health and fitness goals. While BMI is a useful screening tool, it's important to remember that it doesn't directly measure body fat or muscle mass, and should be used as one of several health indicators.`,
    icon: '⚖️',
    keywords: ['BMI calculator', 'body mass index', 'weight calculator', 'health calculator', 'ideal weight'],
    component: 'BMICalculator',
    examples: [
      'Calculate BMI for health assessment',
      'Track weight loss progress',
      'Determine healthy weight range',
    ],
    faqs: [
      {
        question: 'What is a healthy BMI range?',
        answer: 'According to WHO, a healthy BMI is between 18.5 and 24.9. However, individual health needs may vary.',
      },
      {
        question: 'Is BMI accurate for everyone?',
        answer: 'BMI is a useful screening tool but may not be accurate for athletes, pregnant women, or elderly individuals.',
      },
    ],
    relatedTools: ['percentage-calculator', 'age-calculator'],
  },
  {
    id: 'loan-calculator',
    name: 'Loan Calculator',
    category: 'calculator',
    description: 'Calculate loan payments, interest, and amortization schedules',
    longDescription: `The Loan Calculator is a comprehensive financial tool that helps you calculate monthly loan payments, total interest paid, and view detailed amortization schedules. Whether you're planning to buy a house, car, or considering any other loan, this calculator provides clear insights into your financial commitment.

Enter the loan amount, interest rate, and loan term to instantly see your monthly payment amount. The calculator breaks down how much of each payment goes toward principal versus interest, helping you understand the true cost of borrowing.

The amortization schedule shows you exactly how your loan balance decreases over time and how much interest you'll pay throughout the loan term. This information is invaluable for financial planning and comparing different loan options.`,
    icon: '💰',
    keywords: ['loan calculator', 'mortgage calculator', 'loan payment', 'amortization', 'interest calculator'],
    component: 'LoanCalculator',
    examples: [
      'Calculate monthly mortgage payment',
      'Compare different loan terms',
      'View amortization schedule',
    ],
    faqs: [
      {
        question: 'What is an amortization schedule?',
        answer: 'An amortization schedule shows the breakdown of each loan payment, indicating how much goes to principal and interest over the loan term.',
      },
      {
        question: 'How is interest calculated?',
        answer: 'Interest is calculated based on the remaining loan balance each month using the annual interest rate.',
      },
    ],
    relatedTools: ['percentage-calculator'],
  },

  // Converter Tools
  {
    id: 'unit-converter',
    name: 'Unit Converter',
    category: 'converter',
    description: 'Convert between different units of measurement',
    longDescription: `The Unit Converter is a versatile tool that allows you to convert between various units of measurement including length, weight, temperature, volume, area, speed, and more. It's an essential utility for students, engineers, travelers, and anyone who works with different measurement systems.

This converter supports a wide range of unit categories and provides instant conversions as you type. Convert between metric and imperial units, scientific units, and specialized measurements with ease. The tool maintains high precision in calculations while presenting results in an easy-to-understand format.

Whether you're converting kilometers to miles, Celsius to Fahrenheit, liters to gallons, or any other unit combination, this converter handles it all. The intuitive interface makes it easy to select units and see results immediately, with support for decimal precision and scientific notation for very large or small values.`,
    icon: '📏',
    keywords: ['unit converter', 'convert units', 'metric to imperial', 'measurement converter', 'length converter'],
    component: 'UnitConverter',
    examples: [
      'Convert kilometers to miles',
      'Convert Celsius to Fahrenheit',
      'Convert pounds to kilograms',
    ],
    faqs: [
      {
        question: 'How accurate are the conversions?',
        answer: 'Our unit converter uses precise conversion factors and maintains high accuracy up to 10 decimal places.',
      },
      {
        question: 'Can I convert between different unit categories?',
        answer: 'No, conversions are only possible within the same category (e.g., length to length, not length to weight).',
      },
    ],
    relatedTools: ['time-converter', 'number-base-converter'],
  },
  {
    id: 'time-converter',
    name: 'Time Converter',
    category: 'converter',
    description: 'Convert between different time units and time zones',
    longDescription: `The Time Converter tool helps you convert between different time units (seconds, minutes, hours, days, weeks, months, years) and work with time zones. It's perfect for calculating durations, converting time measurements, or coordinating across different time zones.

This versatile tool supports bidirectional conversions between all common time units, making it easy to understand duration in different contexts. For example, quickly find out how many hours are in a year, how many seconds in a day, or convert weeks to months.

The time zone feature allows you to convert times between different regions of the world, essential for scheduling international meetings, planning travel, or coordinating with remote teams. The converter accounts for daylight saving time and provides accurate conversions.`,
    icon: '⏰',
    keywords: ['time converter', 'time zone converter', 'convert time', 'hours to minutes', 'timezone'],
    component: 'TimeConverter',
    examples: [
      'Convert hours to minutes',
      'Calculate time difference between time zones',
      'Convert days to weeks',
    ],
    faqs: [
      {
        question: 'Does the converter account for daylight saving time?',
        answer: 'Yes, the time zone converter automatically accounts for daylight saving time when applicable.',
      },
      {
        question: 'How many hours are in a year?',
        answer: 'A standard year has 8,760 hours (365 days × 24 hours), while a leap year has 8,784 hours.',
      },
    ],
    relatedTools: ['unit-converter', 'age-calculator'],
  },
  {
    id: 'number-base-converter',
    name: 'Number Base Converter',
    category: 'converter',
    description: 'Convert numbers between binary, decimal, octal, and hexadecimal',
    longDescription: `The Number Base Converter is an essential tool for programmers, computer science students, and anyone working with different number systems. Convert numbers seamlessly between binary (base 2), octal (base 8), decimal (base 10), and hexadecimal (base 16) systems.

Understanding different number bases is fundamental in computer science and digital electronics. Binary is the language of computers, hexadecimal is commonly used in programming and color codes, while octal has applications in Unix permissions and other systems.

This converter provides instant conversions with support for large numbers and fractional values. It's perfect for debugging code, understanding memory addresses, working with color codes, or learning about different number systems. The tool also validates input to ensure you're entering valid numbers for each base.`,
    icon: '🔢',
    keywords: ['number base converter', 'binary converter', 'hexadecimal', 'decimal to binary', 'hex converter'],
    component: 'NumberBaseConverter',
    examples: [
      'Convert decimal to binary',
      'Convert hexadecimal color codes to decimal',
      'Convert octal to decimal',
    ],
    faqs: [
      {
        question: 'What is hexadecimal used for?',
        answer: 'Hexadecimal is commonly used in programming for memory addresses, color codes, and as a compact representation of binary data.',
      },
      {
        question: 'Can I convert fractional numbers?',
        answer: 'Yes, the converter supports both integer and fractional numbers in all bases.',
      },
    ],
    relatedTools: ['json-formatter', 'base64-encoder'],
  },

  // SEO Tools
  {
    id: 'meta-tag-generator',
    name: 'Meta Tag Generator',
    category: 'seo',
    description: 'Generate SEO-optimized meta tags for your website',
    longDescription: `The Meta Tag Generator is a powerful SEO tool that helps you create optimized meta tags for your web pages. Meta tags are crucial for search engine optimization and social media sharing, as they determine how your content appears in search results and when shared on platforms like Facebook and Twitter.

This tool generates comprehensive meta tags including title tags, meta descriptions, Open Graph tags for social media, Twitter Card tags, and more. Each field provides character count guidance to help you stay within optimal limits for search engines and social platforms.

Properly optimized meta tags can significantly improve your click-through rates from search results and make your content more shareable on social media. The generator ensures your tags follow best practices and includes all necessary elements for maximum SEO impact.`,
    icon: '🏷️',
    keywords: ['meta tag generator', 'SEO tags', 'meta description', 'open graph', 'twitter cards', 'SEO optimization'],
    component: 'MetaTagGenerator',
    examples: [
      'Generate meta tags for blog posts',
      'Create Open Graph tags for social sharing',
      'Generate Twitter Card meta tags',
    ],
    faqs: [
      {
        question: 'What is the ideal length for a meta description?',
        answer: 'The ideal meta description length is between 150-160 characters to avoid truncation in search results.',
      },
      {
        question: 'Do meta tags affect SEO ranking?',
        answer: 'While meta descriptions don\'t directly affect rankings, good meta tags can improve click-through rates, which can indirectly benefit SEO.',
      },
    ],
    relatedTools: ['slug-generator'],
  },
  {
    id: 'slug-generator',
    name: 'Slug Generator',
    category: 'seo',
    description: 'Generate SEO-friendly URL slugs from titles',
    longDescription: `The Slug Generator creates SEO-friendly URL slugs from your titles or phrases. A slug is the part of a URL that identifies a particular page in a readable format, and it's an important element of on-page SEO.

This tool automatically converts your text into a clean, URL-safe slug by removing special characters, converting spaces to hyphens, making everything lowercase, and handling various edge cases. The result is a professional, search-engine-friendly URL that's easy to read and share.

Good URL slugs improve user experience and SEO by making URLs descriptive and meaningful. They help both users and search engines understand what a page is about before visiting it. The slug generator ensures your URLs follow best practices and avoid common pitfalls like special characters or excessive length.`,
    icon: '🔗',
    keywords: ['slug generator', 'URL slug', 'permalink', 'SEO URL', 'friendly URL'],
    component: 'SlugGenerator',
    examples: [
      'Convert "10 Best Tips for SEO" to "10-best-tips-for-seo"',
      'Generate URL-safe slugs for blog posts',
      'Create clean permalinks',
    ],
    faqs: [
      {
        question: 'What makes a good URL slug?',
        answer: 'A good slug is short, descriptive, uses hyphens to separate words, contains relevant keywords, and is all lowercase.',
      },
      {
        question: 'Should I include stop words in slugs?',
        answer: 'It depends. Short stop words like "a," "an," "the" can often be removed, but keep words that maintain readability.',
      },
    ],
    relatedTools: ['meta-tag-generator'],
  },

  // Developer Tools
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    category: 'developer',
    description: 'Format, validate, and beautify JSON data',
    longDescription: `The JSON Formatter is an essential tool for developers working with JSON (JavaScript Object Notation) data. It formats, validates, and beautifies JSON, making it easy to read and debug. The tool can also minify JSON to reduce file size for production use.

This formatter automatically detects and highlights JSON syntax errors, helping you quickly identify and fix issues in your data. It supports large JSON files and provides options for different indentation styles to match your coding standards.

Whether you're working with API responses, configuration files, or data interchange formats, this JSON formatter makes your data human-readable and easier to work with. It's perfect for debugging API calls, validating JSON syntax, or preparing JSON data for different environments.`,
    icon: '📋',
    keywords: ['JSON formatter', 'JSON validator', 'prettify JSON', 'JSON beautifier', 'format JSON'],
    component: 'JSONFormatter',
    examples: [
      'Format minified JSON for readability',
      'Validate JSON syntax',
      'Minify JSON for production',
    ],
    faqs: [
      {
        question: 'What is JSON?',
        answer: 'JSON (JavaScript Object Notation) is a lightweight data format that\'s easy for humans to read and write, and easy for machines to parse and generate.',
      },
      {
        question: 'Can this tool handle large JSON files?',
        answer: 'Yes, the formatter can handle large JSON files, though very large files (several MB) may take a moment to process.',
      },
    ],
    relatedTools: ['base64-encoder', 'number-base-converter'],
  },
  {
    id: 'base64-encoder',
    name: 'Base64 Encoder/Decoder',
    category: 'developer',
    description: 'Encode and decode Base64 strings',
    longDescription: `The Base64 Encoder/Decoder is a versatile tool for encoding text or data to Base64 format and decoding Base64 strings back to their original form. Base64 encoding is widely used in web development for encoding binary data, embedding images in HTML/CSS, and data transmission.

This tool supports both text and file encoding, making it useful for various scenarios like embedding images in CSS, encoding API credentials, or working with data URIs. The decoder can handle both standard Base64 and URL-safe Base64 formats.

Base64 encoding is essential in many development scenarios, including email attachments (MIME), storing complex data in URLs, embedding images in HTML/CSS, and transmitting binary data over text-based protocols. This tool makes these operations simple and accessible.`,
    icon: '🔐',
    keywords: ['base64 encoder', 'base64 decoder', 'encode base64', 'decode base64', 'data URI'],
    component: 'Base64Encoder',
    examples: [
      'Encode text to Base64',
      'Decode Base64 string',
      'Create data URI for images',
    ],
    faqs: [
      {
        question: 'What is Base64 encoding used for?',
        answer: 'Base64 is used to encode binary data into ASCII text format, commonly for email attachments, data URIs, and transmitting binary data over text protocols.',
      },
      {
        question: 'Is Base64 encryption?',
        answer: 'No, Base64 is encoding, not encryption. It\'s easily reversible and provides no security. Use proper encryption for sensitive data.',
      },
    ],
    relatedTools: ['json-formatter', 'number-base-converter'],
  },
]
