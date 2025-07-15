🧠 Reddit User Persona Generator
Generate insightful and structured persona profiles of Reddit users based on their public activity (posts, comments, and interactions). Useful for social media analysis, community research, marketing insights, or user behavior studies.

🚀 Features
🔍 Scrapes Reddit user activity (posts, comments, subreddits)

🧠 Uses NLP to detect personality traits, interests, writing style, sentiment

🧾 Outputs a structured persona profile (bio, interests, tone, behavioral patterns)

📊 Optional visualization of subreddit affinity, sentiment trends, or keyword clouds

🔐 Works only with publicly available data (no authentication required)

🧩 Example Persona Output

yaml

Username: u/example_user
Core Interests: Technology, Gaming, Mental Health, Startups
Writing Style: Casual, Curious, Slightly Sarcastic
Tone: Mostly Positive with occasional frustration in tech threads
Engagement Pattern: Active during late nights (UTC), posts frequently on weekends
Likely Persona: "The Curious Builder" — a young tech enthusiast constantly exploring new tools and sharing their findings
🛠️ Tech Stack
Python 3.9+

PRAW for Reddit API (read-only)

spaCy, transformers, or TextBlob for NLP

matplotlib / seaborn / wordcloud for optional visualizations

📦 Installation

cd reddit-user-persona
pip install -r requirements.txt
🔑 No Reddit API key is needed for basic scraping via PRAW in read-only mode. For higher limits or advanced features, create an app here.

🚦Usage

python generate_persona.py --username example_user
Options:


--limit         Number of posts/comments to analyze (default: 100)
--visualize     Generate optional visualizations
--save          Save output as JSON or YAML
📁 Output
Outputs are saved in output/ directory as:

example_user_persona.json

(Optional) example_user_wordcloud.png, activity_heatmap.png

🧠 How It Works
Collect: Pulls posts/comments using PRAW.

Analyze: Uses NLP to determine:

Sentiment & tone

Repetition & themes

Personality traits (Big Five-style inference)

Summarize: Outputs a structured, readable persona.

📌 Limitations
Only analyzes public Reddit activity.

Cannot infer real identities or private data.

Profiles are approximations based on language patterns.

📄 License
MIT License# Beyond-chats-assessment

