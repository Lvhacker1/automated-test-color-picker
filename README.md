# automated-test-the-color

<img width="1144" height="569" alt="project-text" src="https://github.com/user-attachments/assets/56763531-ec30-4147-a119-e81318571f06" />
<img width="2538" height="1283" alt="colorpicker-home" src="https://github.com/user-attachments/assets/d141561a-a8bf-456e-98e1-016abf3df053" />
<img width="2560" height="1285" alt="rgb-page-1" src="https://github.com/user-attachments/assets/933409b9-48d4-4f70-8f2e-c29bc0faaf84" />
<img width="2560" height="1284" alt="rgb-page-2" src="https://github.com/user-attachments/assets/52c0824a-037c-45b3-9296-b90f341f4f91" />
<img width="2560" height="1287" alt="hex-page-1" src="https://github.com/user-attachments/assets/701e22c5-c891-4f5a-b1d9-cfd2ec5ee44d" />
<img width="2560" height="1283" alt="hex-page-2" src="https://github.com/user-attachments/assets/d9414d48-3228-4055-ae80-8b47fe724b31" />

//

Next.js is installed but the app is decribed as a SPA with setCurrentPage for navigation.

ColorPick.test.tsx/
- Test description says "button", but looks for role "link". Test and description should match.

MainContent.test.tsx/ & Header.test.tsx/
- It was unclear which heading should be h1, since both the header and MainContent are described as headings without levels. Usually, the h1 is placed in the header, so I put it there. Since the subsections are under the main heading in MainContent, they should use h3 instead of h2.

Header.test.tsx/
- The Header tests repeatedly render the same component. Using beforeEach can reduce duplication and improve maintainability.