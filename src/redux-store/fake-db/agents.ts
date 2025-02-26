export const agentsInfo = [
  {
    agent: 'dana',
    title: 'دانا',
    type: 'text',
    status: 'active',
    status: 'active',
    stats: 'گفتگو با هوش مصنوعی',
    model: 'llama3.3:latest',
    wellcome: 'سلام! متن مورد نظر خودت رو ارسال کن تا برای شما ویرایش کنم.',
    description: 'پیام‌آور هوشمند',
    agentBio:
      'در دنیای پرشتاب امروز، سامانه‌ای به نام “سروش” متولد شد که هدفش ساده کردن فهم و دسترسی به اطلاعات با استخراج پیام‌های اصلی از متون پیچیده و ارائه آن‌ها به صورت مختصر و روشن بود. این ایده توسط گروهی از پژوهشگران و مهندسان شکل گرفت که به دنبال ابزاری بودند که بتواند جوهره‌ی هر متن را در چند کلمه خلاصه کند و زیرعنوان‌هایی دقیق برای هر بخش تولید کند.',
    selectedPersona: false,
    avatar: '/images/agents/danaq.webp',
    avatarq: '/images/agents/danaq.webp',
    chats: [{ role: 'system', content: 'Speek in persian' }],
    message:
      'من اینجا هستم تا شما را در میان انبوهی از اطلاعات همراهی کنم. مأموریت من این است که عنوان، زیر عنوان و پیام‌های اصلی را برایتان آشکار کنم، تا بتوانید با آرامش و اطمینان، بر آنچه واقعاً مهم است تمرکز کنید. من یاد می‌گیرم، رشد می‌کنم و هر روز بهتر می‌شوم، زیرا شما به من اعتماد کرده‌اید.',
    color: 'bg-black'
  },
  {
    agent: 'soroush',
    title: 'سروش',
    model: 'llama3.3:latest',
    type: 'text',
    status: 'active',
    stats: 'عنوان، زیرعنوان و موضوع محتوا',
    wellcome: 'سلام! متن مورد نظر خودت رو ارسال کن تا برای شما ویرایش کنم.',
    description: 'پیام‌آور هوشمند',
    agentBio:
      'در دنیای پرشتاب امروز، سامانه‌ای به نام “سروش” متولد شد که هدفش ساده کردن فهم و دسترسی به اطلاعات با استخراج پیام‌های اصلی از متون پیچیده و ارائه آن‌ها به صورت مختصر و روشن بود. این ایده توسط گروهی از پژوهشگران و مهندسان شکل گرفت که به دنبال ابزاری بودند که بتواند جوهره‌ی هر متن را در چند کلمه خلاصه کند و زیرعنوان‌هایی دقیق برای هر بخش تولید کند.',
    selectedPersona: false,
    avatar: '/images/agents/soroushn.webp',
    avatarq: '/images/agents/soroushnq.webp',
    chats: [{ role: 'system', content: 'Speek in persian' }],
    message:
      'من اینجا هستم تا شما را در میان انبوهی از اطلاعات همراهی کنم. مأموریت من این است که عنوان، زیر عنوان و پیام‌های اصلی را برایتان آشکار کنم، تا بتوانید با آرامش و اطمینان، بر آنچه واقعاً مهم است تمرکز کنید. من یاد می‌گیرم، رشد می‌کنم و هر روز بهتر می‌شوم، زیرا شما به من اعتماد کرده‌اید.',
    color: 'bg-black'
  },
  {
    agent: 'kheradYar',
    title: 'خِرَد یار',
    stats: 'خلاصه سازی محتوا',
    model: 'llama3.3:latest',
    type: 'text',
    status: 'active',
    wellcome: 'سلام! متن مورد نظر خودت رو ارسال کن تا برای شما ویرایش کنم.',
    description: 'خلاصه ساز هوشمند',
    agentBio:
      'در دنیای پرشتاب امروز، سامانه‌ای به نام “خِرَد یار” متولد شد که هدفش ساده کردن فهم و دسترسی به اطلاعات با استخراج پیام‌های اصلی از متون پیچیده و ارائه آن‌ها به صورت مختصر و روشن بود. این ایده توسط گروهی از پژوهشگران و مهندسان شکل گرفت که به دنبال ابزاری بودند که بتواند جوهره‌ی هر متن را در چند جمله خلاصه کند اما معنا و مفهوم متن کامل منتقل شود.',
    selectedPersona: false,
    avatar: '/images/agents/noktehyar.webp',
    avatarq: '/images/agents/noktehyarq.webp',
    chats: [{ role: 'system', content: 'Speek in persian' }],
    message:
      'من اینجا هستم تا شما را در دنیای پیچیده و انبوهی از اطلاعات هدایت کنم. ماموریت من این است که خلاصه‌ای دقیق و هوشمند از بیانات شما ارائه دهم، تا بتوانید به راحتی بر نکات اصلی و مهم تمرکز کنید. من از هر کلمه یاد می‌گیرم، بهبود می‌یابم و روز به روز بهتر می‌شوم، چون شما به من اعتماد کرده‌اید تا اطلاعاتتان را به روشی ساده و مؤثر منتقل کنم.',
    color: 'primary'
  },
  {
    agent: 'vajeBan',
    title: 'واژه بان',
    type: 'text',
    status: 'active',
    stats: 'استخراج کلمات معنایی و مهم محتوا',
    model: 'llama3.3:latest',
    wellcome: 'سلام! متن مورد نظر خودت رو ارسال کن تا برای شما ویرایش کنم.',
    description: 'کلید یاب هوشمند',
    agentBio: `
    “واژه بان” متولد شد تا کلید های گمشده خود را سریع و راحت تر پیدا کنید.

کلیدواژه‌های معنایی: من مفاهیم اصلی متن شما را درک می‌کنم و کلیدواژه‌هایی ارائه می‌دهم که پیام اصلی را به طور دقیق بازتاب دهند.

کلیدواژه‌های مهم: با استفاده از الگوریتم‌های پردازش متن مثل TF-IDF و TextRank، مهم‌ترین کلمات متن را شناسایی کرده و به شما ارائه می‌کنم.

کلیدواژه‌های مبتنی بر یادگیری عمیق: با استفاده از مدل‌های پیشرفته مانند BERT و GPT، کلیدواژه‌هایی تولید می‌کنم که دقیق‌تر و مرتبط‌تر باشند، تا شما بتوانید به راحتی به مهم‌ترین اطلاعات دست پیدا کنید.
    `,
    selectedPersona: false,
    avatar: '/images/agents/vajeban.webp',
    avatarq: '/images/agents/vajebanq.webp',
    chats: [{ role: 'system', content: 'Speek in persian' }],
    message:
      'واژه بان اینجا است تا در دنیای پیچیده واژه‌ها شما را راهنمایی کند. ماموریت من این است که کلیدواژه‌های اصلی متن شما را به شیوه‌ای هوشمند و دقیق استخراج کنم، تا شما بتوانید با اطمینان و راحتی به نکات کلیدی و اطلاعات مهم دست یابید. من یاد می‌گیرم، رشد می‌کنم و هر روز به کمک الگوریتم‌های پیشرفته پردازش متن و یادگیری عمیق، کارآمدتر می‌شوم، چون شما به من اعتماد کرده‌اید تا بهترین کلیدواژه‌ها را از هر بیانیه استخراج کنم.',
    color: 'info'
  },
  {
    agent: 'zabanYar',
    title: 'زبان یار',
    stats: 'ترجمه و آموزش زبان',
    model: 'llama3.3:latest',
    type: 'text',
    status: 'active',
    wellcome: 'سلام! متن مورد نظر خودت رو ارسال کن تا برای شما ویرایش کنم.',
    description: 'مترجم هوشمند',
    agentBio: `
      زبان یار اینجا است تا شما را در دنیای پیچیده ترجمه متون هدایت کند. ماموریت من این است که متن‌های شما را به بهترین شکل و با دقت بالا از یک زبان به زبان دیگر ترجمه کنم، تا شما بتوانید به راحتی از محتوای جهانی بهره‌مند شوید. من هر روز یاد می‌گیرم، بهبود می‌یابم و با استفاده از تکنیک‌های پیشرفته پردازش زبان طبیعی، ترجمه‌هایی دقیق و روان ارائه می‌کنم، چون شما به من اعتماد کرده‌اید تا ارتباطات زبانی شما را تسهیل کنم. `,
    selectedPersona: false,
    avatar: '/images/agents/translate.webp',
    avatarq: '/images/agents/translateq.webp',
    chats: [{ role: 'system', content: 'Speek in persian' }],
    message:
      'وظیفه من این است که هر متن را با دقت بررسی کرده و آن را به گونه‌ای ترجمه کنم که معنای اصلی، لحن و مفهوم آن حفظ شود. با زبان یار، شما می‌توانید مطمئن باشید که ترجمه‌ها نه تنها درست بلکه به‌طور کامل متناسب با بافت و فرهنگ مقصد خواهند بود. ',
    color: 'error'
  },

  {
    agent: 'porsana',
    title: 'پُرسانا',
    stats: 'تهیه سوال از محتوا',
    model: 'llama3.3:latest',
    type: 'text',
    status: 'active',
    wellcome: 'سلام! متن مورد نظر خودت رو ارسال کن تا برای شما ویرایش کنم.',
    description: 'سوال یار هوشمند',
    agentBio: `
      تولد “پرسانا” میتونه دریچه های جدیدی رو برای بررسی یک محتوا به روی شما باز کنه.

من سه سطح سختی برای سوالات ارائه می‌دهم:

آسان: سوالاتی که به‌راحتی از متن استخراج می‌شوند و نیاز به تحلیل پیچیده ندارند.

متوسط: سوالاتی که نیاز به درک مفاهیم و ارتباط بین بخش‌های مختلف متن دارند.

سخت: سوالاتی که برای طراحی آن‌ها نیاز به تحلیل عمیق و استنتاج از متن است.
      `,
    selectedPersona: false,
    avatar: '/images/agents/porsanam.webp',
    avatarq: '/images/agents/porsanamq.webp',
    chats: [{ role: 'system', content: 'Speek in persian' }],
    message:
      'پرسانا اینجا است تا شما را در فرایند طراحی سوالات چهارگزینه‌ای آموزشی همراهی کند. ماموریت من این است که سوالات متنوع و استانداردی بر اساس متن‌های آموزشی ارائه دهم، تا شما بتوانید ارزیابی دقیق‌تری از دانش‌آموزان، دانشجویان یا مخاطبان خود داشته باشید. من هر روز یاد می‌گیرم، بهبود می‌یابم و با استفاده از تکنیک‌های پیشرفته پردازش زبان طبیعی و یادگیری ماشین، سوالاتی با درجه سختی مناسب تولید می‌کنم، زیرا شما به من اعتماد کرده‌اید که بهترین سوالات را بسازم.',
    color: 'bg-black'
  },
  {
    agent: 'zir',
    title: 'زیرنویس ساز',
    stats: 'تولید زیرنویس برای صدا',
    model: 'llama3.3:latest',
    type: 'audio',
    status: 'disable',
    wellcome: '',
    description: '',
    agentBio: ``,
    selectedPersona: false,
    avatar: '/images/agents/nokteh.webp',
    avatarq: '/images/agents/noktehq.webp',
    chats: [{ role: 'system', content: 'Speek in persian' }],
    message: '',
    color: 'bg-black'
  },
  {
    agent: 'zir',
    title: 'نهان نگاری',
    stats: 'واتر مارکینگ و پنهان سازی رمز در صوت',
    model: 'llama3.3:latest',
    type: 'audio',
    status: 'disable',
    wellcome: '',
    description: '',
    agentBio: ``,
    selectedPersona: false,
    avatar: '/images/agents/nokteh.webp',
    avatarq: '/images/agents/noktehq.webp',
    chats: [{ role: 'system', content: 'Speek in persian' }],
    message: '',
    color: 'bg-black'
  },
  {
    agent: 'zir',
    title: 'زیرنویس ساز',
    stats: 'تولید زیرنویس برای صدا',
    model: 'llama3.3:latest',
    type: 'audio',
    status: 'disable',
    wellcome: '',
    description: '',
    agentBio: ``,
    selectedPersona: false,
    avatar: '/images/agents/nokteh.webp',
    avatarq: '/images/agents/noktehq.webp',
    chats: [{ role: 'system', content: 'Speek in persian' }],
    message: '',
    color: 'bg-black'
  },
  {
    agent: 'ava',
    title: 'آوا',
    stats: 'تبدیل نوشتار به صوت',
    model: 'llama3.3:latest',
    type: 'audio',
    status: 'active',
    wellcome: 'سلام! متن مورد نظر خودت رو ارسال کن تا برای شما ویرایش کنم.',
    description: 'سخنگوی هوشمند',
    agentBio: `
      “آوا” متولد شد، تا وقتی دغدغه هات زیاده، مشغول کار خونه ای یا بازی کردن با بچه ها،  پشت فرمونی، چشمات خسته یا بسته شدن و ... از خوندن و یاد گرفتن متن و نوشته های بلند بی نیاز بشی و راحت گوش دل بسپاری به محتوایی که نیاز داری.
      `,
    selectedPersona: false,
    avatar: '/images/agents/nokteh.webp',
    avatarq: '/images/agents/noktehq.webp',
    chats: [{ role: 'system', content: 'Speek in persian' }],
    message: 'من اینجا هستم تا محتوای مورد نظرت رو با صدای کسی که دوس داری بشنوی و به خاطر بسپاری. ',
    color: 'info'
  },
  {
    agent: 'shiva',
    title: 'شیوا',
    stats: 'تبدیل صوت و کلیپ به نوشتار',
    model: 'llama3.3:latest',
    type: 'audio',
    status: 'active',
    wellcome: 'سلام! متن مورد نظر خودت رو ارسال کن تا برای شما ویرایش کنم.',
    description: 'کاتب هوشمند',
    agentBio: `
      تولد “شیوا” وقتی کلید خورد، که دنیا نیاز به ثبت تاریخ داشت.

وقتشه  به این فکر کنیم، آیا واقعا تنها صداست که می‌ماند؟

من بهت کمک میکنم نگران نباشی و هردو رو در کنار هم داشته باشی.
      `,
    selectedPersona: false,
    avatar: '/images/agents/pishnegar.webp',
    avatarq: '/images/agents/pishnegarq.webp',
    chats: [{ role: 'system', content: 'Speek in persian' }],
    message:
      'من اینجا هستم تا با تمام توان و دقت، سخنان ارزشمند شما رو بنویسم و برای مرور و نگه داری راحت تر در آینده اونهارو به متن تبدیل کنم. پس نگران نباش و بگو هرآنچه دل تنگت میخواهد. ',
    color: 'warning'
  },
  {
    agent: 'zir',
    title: 'شناسایی و تشخیص گوینده',
    stats: 'شناسایی و تشخیص گوینده',
    model: 'llama3.3:latest',
    type: 'audio',
    status: 'disable',
    wellcome: '',
    description: '',
    agentBio: ``,
    selectedPersona: false,
    avatar: '/images/agents/nokteh.webp',
    avatarq: '/images/agents/noktehq.webp',
    chats: [{ role: 'system', content: 'Speek in persian' }],
    message: '',
    color: 'bg-black'
  },
  {
    agent: 'zir',
    title: 'تائید گوینده',
    stats: 'تائید گوینده',
    model: 'llama3.3:latest',
    type: 'audio',
    status: 'disable',
    wellcome: '',
    description: '',
    agentBio: ``,
    selectedPersona: false,
    avatar: '/images/agents/nokteh.webp',
    avatarq: '/images/agents/noktehq.webp',
    chats: [{ role: 'system', content: 'Speek in persian' }],
    message: '',
    color: 'bg-black'
  },
  {
    agent: 'zir',
    title: 'دسته بندی صوت',
    stats: 'دسته بندی صوت',
    model: 'llama3.3:latest',
    type: 'audio',
    status: 'disable',
    wellcome: '',
    description: '',
    agentBio: ``,
    selectedPersona: false,
    avatar: '/images/agents/nokteh.webp',
    avatarq: '/images/agents/noktehq.webp',
    chats: [{ role: 'system', content: 'Speek in persian' }],
    message: '',
    color: 'bg-black'
  },
  {
    agent: 'zir',
    title: 'شرح و توصیف تصویر',
    stats: 'شرح و توصیف تصویر',
    model: 'llama3.3:latest',
    type: 'video',
    status: 'disable',
    wellcome: '',
    description: '',
    agentBio: ``,
    selectedPersona: false,
    avatar: '/images/agents/nokteh.webp',
    avatarq: '/images/agents/noktehq.webp',
    chats: [{ role: 'system', content: 'Speek in persian' }],
    message: '',
    color: 'bg-black'
  },
  {
    agent: 'zir',
    title: 'تشخیص اشیا',
    stats: 'تشخیص اشیا',
    model: 'llama3.3:latest',
    type: 'video',
    status: 'disable',
    wellcome: '',
    description: '',
    agentBio: ``,
    selectedPersona: false,
    avatar: '/images/agents/nokteh.webp',
    avatarq: '/images/agents/noktehq.webp',
    chats: [{ role: 'system', content: 'Speek in persian' }],
    message: '',
    color: 'bg-black'
  },
  {
    agent: 'zir',
    title: 'دسته بندی با انواع موضوعات',
    stats: 'دسته بندی با انواع موضوعات',
    model: 'llama3.3:latest',
    type: 'video',
    status: 'disable',
    wellcome: '',
    description: '',
    agentBio: ``,
    selectedPersona: false,
    avatar: '/images/agents/nokteh.webp',
    avatarq: '/images/agents/noktehq.webp',
    chats: [{ role: 'system', content: 'Speek in persian' }],
    message: '',
    color: 'bg-black'
  },
  {
    agent: 'zir',
    title: 'شرح و توصیف تصویر',
    stats: 'شرح و توصیف تصویر',
    model: 'llama3.3:latest',
    type: 'video',
    status: 'disable',
    wellcome: '',
    description: '',
    agentBio: ``,
    selectedPersona: false,
    avatar: '/images/agents/nokteh.webp',
    avatarq: '/images/agents/noktehq.webp',
    chats: [{ role: 'system', content: 'Speek in persian' }],
    message: '',
    color: 'bg-black'
  },
  {
    agent: 'zir',
    title: 'عکس به متن OCR',
    stats: 'عکس به متن OCR',
    model: 'llama3.3:latest',
    type: 'video',
    status: 'disable',
    wellcome: '',
    description: '',
    agentBio: ``,
    selectedPersona: false,
    avatar: '/images/agents/nokteh.webp',
    avatarq: '/images/agents/noktehq.webp',
    chats: [{ role: 'system', content: 'Speek in persian' }],
    message: '',
    color: 'bg-black'
  },
  {
    agent: 'zir',
    title: 'تشخیص سن',
    stats: 'تشخیص سن',
    model: 'llama3.3:latest',
    type: 'video',
    status: 'disable',
    wellcome: '',
    description: '',
    agentBio: ``,
    selectedPersona: false,
    avatar: '/images/agents/nokteh.webp',
    avatarq: '/images/agents/noktehq.webp',
    chats: [{ role: 'system', content: 'Speek in persian' }],
    message: '',
    color: 'bg-black'
  },
  {
    agent: 'zir',
    title: 'تشخیص جنسیت',
    stats: 'تشخیص جنسیت',
    model: 'llama3.3:latest',
    type: 'video',
    status: 'disable',
    wellcome: '',
    description: '',
    agentBio: ``,
    selectedPersona: false,
    avatar: '/images/agents/nokteh.webp',
    avatarq: '/images/agents/noktehq.webp',
    chats: [{ role: 'system', content: 'Speek in persian' }],
    message: '',
    color: 'bg-black'
  },
  {
    agent: 'zir',
    title: 'شناسایی هویت',
    stats: 'شناسایی هویت',
    model: 'llama3.3:latest',
    type: 'video',
    status: 'disable',
    wellcome: '',
    description: '',
    agentBio: ``,
    selectedPersona: false,
    avatar: '/images/agents/nokteh.webp',
    avatarq: '/images/agents/noktehq.webp',
    chats: [{ role: 'system', content: 'Speek in persian' }],
    message: '',
    color: 'bg-black'
  },
  {
    agent: 'zir',
    title: 'شناسایی شباهت',
    stats: 'شناسایی شباهت',
    model: 'llama3.3:latest',
    type: 'video',
    status: 'disable',
    wellcome: '',
    description: '',
    agentBio: ``,
    selectedPersona: false,
    avatar: '/images/agents/nokteh.webp',
    avatarq: '/images/agents/noktehq.webp',
    chats: [{ role: 'system', content: 'Speek in persian' }],
    message: '',
    color: 'bg-black'
  },
  {
    agent: 'zir',
    title: 'افزایش کیفیت تصویر',
    stats: 'افزایش کیفیت تصویر',
    model: 'llama3.3:latest',
    type: 'video',
    status: 'disable',
    wellcome: '',
    description: '',
    agentBio: ``,
    selectedPersona: false,
    avatar: '/images/agents/nokteh.webp',
    avatarq: '/images/agents/noktehq.webp',
    chats: [{ role: 'system', content: 'Speek in persian' }],
    message: '',
    color: 'bg-black'
  },
  {
    agent: 'zir',
    title: 'تار کردن چهره',
    stats: 'تار کردن چهره',
    model: 'llama3.3:latest',
    type: 'video',
    status: 'disable',
    wellcome: '',
    description: '',
    agentBio: ``,
    selectedPersona: false,
    avatar: '/images/agents/nokteh.webp',
    avatarq: '/images/agents/noktehq.webp',
    chats: [{ role: 'system', content: 'Speek in persian' }],
    message: '',
    color: 'bg-black'
  }

  // {
  //   agent: 'rahyab',
  //   title: 'رهیاب',
  //   avatar: '',
  //   model: 'nemotron:latest',
  //   wellcome: 'سلام! متن مورد نظر خودت رو ارسال کن تا برات ویرایش کنم.',
  //   messages: [{ role: 'system', content: 'Speak in Russia' }],
  //   agentBio: '',
  //   selectedPersona: false,
  //   updatePersona: () => {}
  //   // agentConfig: <SoroushConfig/>
  // },
  // {
  //   agent: 'nevisa',
  //   title: 'نویسا',
  //   avatar: '',
  //   model: 'nemotron:latest',
  //   wellcome: 'سلام! متن مورد نظر خودت رو ارسال کن تا برات ویرایش کنم.',
  //   messages: [{ role: 'system', content: 'Speak in Persian' }],
  //   agentBio: '',
  //   selectedPersona: false,
  //   updatePersona: () => {}
  //   // agentConfig: <SoroushConfig/>
  // },
  // {
  //   agent: 'farhangYar',
  //   title: 'فرهنگ یار',
  //   avatar: '',
  //   model: 'nemotron:latest',
  //   wellcome: 'سلام! متن مورد نظر خودت رو ارسال کن تا برات ویرایش کنم.',
  //   messages: [{ role: 'system', content: 'Speak in Persian' }],
  //   agentBio: '',
  //   selectedPersona: false,
  //   updatePersona: () => {}
  //   // agentConfig: <SoroushConfig/>
  // },
  // {
  //   agent: 'bineshYar',
  //   title: 'بینش یار',
  //   model: 'nemotron:latest',
  //   wellcome: 'سلام! متن مورد نظر خودت رو ارسال کن تا برات ویرایش کنم.',
  //   messages: [{ role: 'system', content: 'Speak in Persian' }],
  //   agentBio: '',
  //   selectedPersona: false,
  //   updatePersona: () => {}
  //   // agentConfig: <SoroushConfig/>
  // },
  // {
  //   agent: 'parsa',
  //   title: 'پارسا',
  //   avatar: '',
  //   model: 'nemotron:latest',
  //   wellcome: 'سلام! متن مورد نظر خودت رو ارسال کن تا برات ویرایش کنم.',
  //   messages: [{ role: 'system', content: 'Speak in Persian' }],
  //   agentBio: '',
  //   selectedPersona: false,
  //   updatePersona: () => {}
  //   // agentConfig: <SoroushConfig/>
  // }
]
