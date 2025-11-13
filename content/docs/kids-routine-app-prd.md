# Kids' Routine Scheduler - PRD

## 🎯 **Project Overview**

A simple, visual task management app designed for kids to independently manage their morning and evening routines. The app presents daily tasks in a clear, encouraging format that helps build responsibility and time management skills.

**Target User:** Kids (ages 5-12) and their parents  
**Tech Stack:** React/Next.js web app, mobile-friendly  
**Philosophy:** Simple, visual, encouraging - make routines feel like achievements, not chores

---

## 💡 **Core Problem Statement**

**Morning and evening routines are chaotic and require constant parental reminders.**

Current state:
- Parents repeatedly remind kids about the same tasks every day ("Did you brush your teeth?" "Don't forget your backpack!")
- Kids struggle to remember all the steps in their routine
- No sense of progress or accomplishment
- Routines feel like nagging rather than independence-building

**The Need:** A kid-friendly visual tool that helps children independently work through their routines while giving parents visibility and peace of mind. Turn daily routines from a source of stress into an opportunity for kids to feel capable and responsible.

---

## 👥 **Key User Personas**

### **Persona 1: The Kid (Primary User)**
*Ages 5-12, learning to be more independent*

**Critical Pain Points:**
- Forgets steps in the routine
- Gets distracted mid-routine
- Doesn't know what's next
- Feels like parents are always nagging
- Wants to feel "grown up" and capable

**Unmet Needs:**
- Clear visual checklist they can understand
- Sense of progress and accomplishment
- Independence from parent reminders
- Fun, not nagging
- Works on devices they already use (tablet, phone)

---

### **Persona 2: The Parent (Setup & Monitor)**
*Wants kids to be independent but needs to ensure routines are completed*

**Critical Pain Points:**
- Tired of being a "broken record" with reminders
- Can't see if kid completed tasks without checking
- Routines vary by day or situation
- Hard to motivate kids consistently
- Wants to build responsibility, not dependence

**Unmet Needs:**
- Easy way to set up and customize routines
- Quick check-in on completion status
- Flexible task lists for different days
- Positive reinforcement system
- Low maintenance once set up

---

## 🔧 **Core Features**

### **Phase 1: MVP (Essential)**

#### 1. **Morning & Evening Routine Lists**
- **What:** Two separate checklists - one for morning, one for evening
- **How:**
  - Big, clear buttons to switch between "Morning" and "Evening" mode
  - Each routine shows 5-10 tasks with checkboxes
  - Large, kid-friendly text and icons
  - Tasks shown in order (top to bottom)
- **Why:** Clear separation helps kids understand context and expectations

#### 2. **Visual Task Cards**
- **What:** Each task displayed as a large, tappable card
- **Design:**
  - Icon or emoji representing the task (🪥 brush teeth, 🎒 pack backpack)
  - Simple text description
  - Large checkbox or tap-to-complete interaction
  - Visual feedback when completed (checkmark, color change, animation)
- **Why:** Visual cues help pre-readers and make tasks feel concrete

#### 3. **Progress Tracking**
- **What:** Visual indicator showing how much of the routine is complete
- **Options:**
  - Progress bar at top ("4 of 7 tasks done!")
  - Percentage complete
  - Simple counter
  - Fun visual like filling a cup or growing a plant
- **Why:** Shows kids they're making progress and motivates completion

#### 4. **Daily Reset**
- **What:** Tasks automatically reset each day at midnight
- **How:**
  - Morning routine resets at midnight
  - Evening routine resets at midnight
  - Previous day's completion tracked but new day starts fresh
- **Why:** Each day is a new opportunity, reduces overwhelm

#### 5. **Parent Setup Mode**
- **What:** Simple interface for parents to create and edit task lists
- **Features:**
  - Add/remove tasks
  - Reorder tasks (drag and drop)
  - Choose icons for each task
  - Write custom task descriptions
  - Switch between Morning/Evening lists
  - Access via password or separate parent screen
- **Why:** Parents need control without kids accidentally changing things

#### 6. **Celebration When Complete**
- **What:** Positive feedback when all tasks are done
- **Options:**
  - Confetti animation
  - Happy message ("You did it! All done! ⭐")
  - Simple sound effect (optional)
  - "Streak" counter (completed X days in a row)
- **Why:** Positive reinforcement encourages consistency

---

## 🎨 **User Experience**

### **Kid View - Main Screen**
```
┌───────────────────────────────────┐
│  ☀️ Morning  |  🌙 Evening        │  ← Mode toggle
├───────────────────────────────────┤
│                                   │
│   Progress: ████░░░  5 of 7      │  ← Progress bar
│                                   │
├───────────────────────────────────┤
│                                   │
│   ✅ 🪥  Brush teeth              │  ← Completed task
│                                   │
│   ✅ 👕  Get dressed              │
│                                   │
│   ☐ 🥣  Eat breakfast            │  ← Pending task
│                                   │
│   ☐ 🎒  Pack backpack            │
│                                   │
│   ☐ 🧦  Put on shoes             │
│                                   │
└───────────────────────────────────┘
```

### **Parent Setup View**
```
┌───────────────────────────────────┐
│  🔒 Parent Setup                  │
│  ☀️ Morning Routine              │
├───────────────────────────────────┤
│                                   │
│  1. 🪥  Brush teeth          [✏️] │
│  2. 👕  Get dressed          [✏️] │
│  3. 🥣  Eat breakfast        [✏️] │
│                                   │
│  [+ Add New Task]                 │
│                                   │
│  Switch to: [🌙 Evening]          │
│                                   │
└───────────────────────────────────┘
```

### **Key Interactions**
1. **Kid taps a task** → Task gets checkmark, color changes, small celebration animation
2. **Kid completes all tasks** → Full screen celebration with confetti
3. **Parent enters setup mode** → Password/PIN screen, then edit interface
4. **New day starts** → All tasks reset, ready for new routine

---

## 📐 **Technical Architecture**

### **Framework: Next.js + React**

### **Project Structure**
```
/app
  /page.tsx              # Main kid view (routine list)
  /parent/
    /page.tsx           # Parent setup view
  /api/
    /routines/          # API routes for saving/loading tasks

/components
  /RoutineList.tsx      # Main task list component
  /TaskCard.tsx         # Individual task card
  /ProgressBar.tsx      # Progress indicator
  /ModeToggle.tsx       # Morning/Evening switcher
  /Celebration.tsx      # Completion animation
  /ParentSetup.tsx      # Parent edit interface

/lib
  /storage.ts           # LocalStorage or DB interaction
  /types.ts             # TypeScript types
```

### **Data Model**
```typescript
interface Task {
  id: string;
  text: string;
  icon: string;
  order: number;
  completed: boolean;
  routineType: 'morning' | 'evening';
}

interface Routine {
  type: 'morning' | 'evening';
  tasks: Task[];
  lastCompletedDate: Date;
  streakCount: number;
}
```

### **Storage**
- **Option 1 (Simple):** Browser LocalStorage
  - Works offline
  - No backend needed
  - Device-specific
  
- **Option 2 (Future):** Supabase/Firebase
  - Syncs across devices
  - Parent can check remotely
  - Historical data

**Start with LocalStorage for MVP, migrate to cloud if needed.**

### **Key Dependencies**
- **Animations:** `framer-motion` for smooth interactions
- **Icons:** `lucide-react` or emoji (built-in)
- **Styling:** Tailwind CSS for responsive, kid-friendly design
- **State:** React Context or Zustand for simple state management

---

## 🎯 **User Stories**

### **As a Kid, I want to:**

1. **See what I need to do**
   - Open app → See morning tasks
   - Know exactly what's expected without asking parent

2. **Check off completed tasks**
   - Tap a task → See it marked complete
   - Feel sense of accomplishment with each check

3. **Track my progress**
   - See progress bar fill up
   - Know how many tasks left

4. **Get celebrated**
   - Complete all tasks → See fun animation
   - Feel proud of finishing

5. **Switch between morning and evening**
   - Tap "Evening" button → See evening tasks
   - Understand different times have different routines

---

### **As a Parent, I want to:**

1. **Set up routines easily**
   - Add tasks with 2-3 taps
   - Customize for my kid's needs

2. **Edit routines as needed**
   - Change tasks when routine changes (school vs. summer)
   - Reorder or remove tasks quickly

3. **Check completion at a glance**
   - Look at kid's device → See if routine done
   - Or check remotely (future)

4. **Encourage independence**
   - Kid uses app without my help
   - Reduces need for verbal reminders

---

## 🚀 **Implementation Plan**

### **Step 1: Setup & Design**
- [ ] Initialize Next.js project with TypeScript
- [ ] Install Tailwind CSS and framer-motion
- [ ] Design color scheme and kid-friendly UI
- [ ] Create responsive mobile-first layout

### **Step 2: Core Task List**
- [ ] Build TaskCard component
- [ ] Build RoutineList component
- [ ] Implement checkbox/tap-to-complete interaction
- [ ] Add task completion animations

### **Step 3: Progress & Celebration**
- [ ] Create ProgressBar component
- [ ] Build Celebration component with confetti
- [ ] Wire up completion detection

### **Step 4: Morning/Evening Toggle**
- [ ] Create ModeToggle component
- [ ] Implement state management for routine types
- [ ] Test switching between modes

### **Step 5: Parent Setup**
- [ ] Build parent PIN/password gate
- [ ] Create task edit interface
- [ ] Implement add/remove/reorder functionality
- [ ] Add icon picker for tasks

### **Step 6: Data Persistence**
- [ ] Implement LocalStorage save/load
- [ ] Add daily reset logic
- [ ] Test data persistence across sessions

### **Step 7: Polish**
- [ ] Refine animations and transitions
- [ ] Test with actual kid user
- [ ] Adjust sizing/UX based on feedback
- [ ] Add streak counter
- [ ] Optimize for tablet/phone screens

### **Step 8: Deploy**
- [ ] Deploy to Vercel
- [ ] Test on multiple devices
- [ ] Create quick start guide for parents

---

## ✅ **Success Criteria**

This project succeeds if:

1. **Independence:** Kid uses the app without parent prompting within 1 week
2. **Reduction in reminders:** Parents give 50% fewer verbal reminders
3. **Consistency:** Kid completes routines 80%+ of days
4. **Positive experience:** Kid enjoys using it (asks to use it, smiles at celebrations)
5. **Low maintenance:** Parents spend <5 minutes per week managing task lists
6. **It gets used:** Still being used after 1 month (not abandoned)

---

## 🎨 **Design Principles**

1. **Kid-First:** Design for the child's abilities and preferences, not adult aesthetics
2. **Big & Clear:** Large tap targets, high contrast, simple language
3. **Positive:** Celebrate success, don't punish incomplete tasks
4. **Fast:** Instant feedback, no loading spinners
5. **Independent:** Kid can use it without help after initial orientation
6. **Flexible:** Parents can adapt it to their family's needs

---

## 📝 **Example Workflows**

### **Workflow 1: Morning Routine**
1. Kid wakes up, grabs tablet
2. Opens app → automatically shows Morning routine
3. Goes to bathroom, brushes teeth
4. Returns, taps "Brush teeth" → Checkmark appears with small animation
5. Continues through tasks (get dressed, eat breakfast, etc.)
6. After last task (pack backpack) → CELEBRATION! Confetti animation
7. Shows parent "All done!" screen

### **Workflow 2: Parent Customization**
1. Parent opens app → taps settings icon
2. Enters PIN (simple 4-digit)
3. Opens Morning routine editor
4. Taps "Add Task"
5. Chooses icon (🧦), writes "Put on shoes"
6. Drags task to correct order in list
7. Saves, exits setup
8. Kid sees new task next morning

### **Workflow 3: Evening Routine**
1. After dinner, parent says "Time for evening routine"
2. Kid opens app, taps "🌙 Evening" button
3. Sees different task list (homework, bath, pajamas, etc.)
4. Works through evening tasks
5. Completes routine, gets celebration
6. Goes to bed feeling accomplished

---

## 📦 **Nice-to-Haves (Phase 2)**

**If MVP works well, consider:**
- **Timers:** Optional time estimates for each task (5 mins for breakfast)
- **Sound effects:** Toggle-able sound for completions
- **Themes:** Let kid choose color scheme or background
- **Rewards system:** Stars/points accumulate over time
- **Parent dashboard:** Web view showing completion history
- **Multiple kids:** Support siblings with separate profiles
- **Custom icons:** Upload photos for tasks
- **Reminders:** Optional notifications at set times
- **Weekend vs. weekday:** Different routines for different days
- **Task notes:** Parent can add details ("Remember to brush for 2 minutes")

**But start simple!** Only add if MVP proves valuable.

---

## 🎯 **Key Design Decisions**

### **Why separate Morning/Evening (not one list)?**
- Kids understand time-of-day context
- Different tasks for different times
- Smaller, less overwhelming lists

### **Why no account/login for MVP?**
- Reduces friction
- Faster to build
- LocalStorage is sufficient for single device
- Can add cloud sync in Phase 2 if needed

### **Why big visual design (not minimal)?**
- Kids need larger tap targets (motor skills developing)
- Visual feedback confirms actions
- Icons help pre-readers and visual learners
- Makes it feel like "their" app, not boring adult software

### **Why celebration animations?**
- Positive reinforcement is more effective than punishment
- Makes routines feel like games/achievements
- Kids naturally seek the dopamine hit of completion
- Builds positive associations with responsibility

---

## 🚧 **Constraints & Considerations**

### **Age Appropriateness**
- **Ages 5-7:** Need icons + minimal text, parent help for setup
- **Ages 8-10:** Can read all text, might customize some themselves
- **Ages 11-12:** Might want more sophisticated features, less "baby" animations

**Solution:** Design for 7-9 year old sweet spot, but make it work for 5-12 range

### **Device Access**
- Assumes kid has access to tablet/phone during routine times
- App should work offline (no internet required)
- Should work on both portrait and landscape

### **Motivation Variability**
- Some kids love checkboxes, others need more engagement
- Start simple, can add gamification in Phase 2
- Celebration should be adjustable (some kids hate loud sounds/flashing)

### **Parent Involvement**
- Parents need to set up initially
- Parents need to model/encourage use in first week
- Should reduce parent involvement over time, not increase it

---

## 🔗 **Inspiration & References**

Similar apps to learn from:
- **Todoist Kids:** Simple checkbox lists
- **Brili Routines:** Timer-based routines
- **Habitica:** Gamified task management (maybe too complex for young kids)

**Our differentiation:**
- Simpler than Brili (no timers required)
- Less gamified than Habitica (no RPG mechanics)
- More visual than Todoist Kids
- Focused specifically on AM/PM routines, not general tasks

---

## 💬 **Open Questions**

1. **Single vs. multiple kids?** Start with single profile, add multi-kid in Phase 2?
2. **Rewards/points system?** Or is completion celebration enough?
3. **Parent remote visibility?** Useful or not needed?
4. **Task descriptions?** Just icons + title, or add optional details?
5. **Age targeting?** Optimize for what age specifically?

**Can answer these during MVP testing with real users.**

---

## ✨ **Final Notes**

**Goal:** Create a simple tool that helps a kid feel capable and independent. Success = less nagging, more responsibility, happier mornings and evenings.

**Philosophy:** Build for the kid, not for the parent's idea of what the kid needs. Test with real kid users early. Iterate based on what actually motivates them.

**Scope:** Start minimal. A working checklist with celebrations is better than a complex system that never ships.

---

**Let's help kids build great habits! 🌟**

