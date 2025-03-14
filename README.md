# გითჰაბზე კოლაბორაციის და კოდ რივიუს ინსტრუქცია

## ნაწილი 1: რეპოზიტორიის შექმნა და მომზადება

### 1.1 რეპოზიტორიის შექმნაი

1. შედით GitHub.com-ზე და დააჭირეთ "New repository" (მწვანე ღილაკი)
2. მიუთითეთ სახელი (მაგ: "PS1-Lab3")
3. აირჩიეთ "Public" ოფცია
4. დააყენეთ "Initialize this repository with a README" ჩართული
5. დააჭირეთ "Create repository"

### 1.2 გუნდის წევრის დამატება

1. შედით რეპოზიტორიის გვერდზე და აირჩიეთ "Settings" ტაბი
2. მარცხენა მენიუდან აირჩიეთ "Collaborators"
3. დააჭირეთ "Add people" ღილაკს
4. შეიყვანეთ თქვენი პარტნიორის GitHub-ის სახელი ან იმეილი
5. დააჭირეთ "Add [username] to this repository"

### 1.3 კოდის საბაზისო ვერსიის დაკლონვა

1. თქვენს ლოკალურ კომპიუტერზე გახსენით ტერმინალი
2. გააკეთეთ კლონი:
   ```
   git clone https://github.com/[თქვენი-სახელი]/PS1-Lab3.git
   cd PS1-Lab3
   ```
3. გადააკოპირეთ PS1 ფაილები ამ ფოლდერში
4. დაამატეთ ცვლილებები:
   ```
   git add .
   git commit -m "დავამატე PS1 ფაილები"
   git push origin main
   ```

## ნაწილი 2: ბრენჩების შექმნა და ფუნქციებზე მუშაობა

### 2.1 პირველი სტუდენტი - toBucketSets ფუნქციისთვის

1. შექმენით ახალი ბრენჩი:
   ```
   git checkout -b feature-toBucketSets
   ```
2. მოძებნეთ PS1/src/algorithm.ts ფაილში toBucketSets ფუნქცია
3. დააიმპლემენტირეთ ფუნქცია
4. შეინახეთ ცვლილებები:
   ```
   git add .
   git commit -m "დავაიმპლემენტირე toBucketSets ფუნქცია"
   git push origin feature-toBucketSets
   ```

### 2.2 მეორე სტუდენტი - getBucketRange ფუნქციისთვის

1. დააკლონეთ რეპოზიტორია (თუ ჯერ არ გაქვთ)
2. შექმენით ახალი ბრენჩი:
   ```
   git checkout -b feature-getBucketRange
   ```
3. მოძებნეთ PS1/src/algorithm.ts ფაილში getBucketRange ფუნქცია
4. დააიმპლემენტირეთ ფუნქცია
5. შეინახეთ ცვლილებები:
   ```
   git add .
   git commit -m "დავაიმპლემენტირე getBucketRange ფუნქცია"
   git push origin feature-getBucketRange
   ```

## ნაწილი 3: Pull Request-ების შექმნა და კოდის რივიუ

### 3.1 Pull Request-ის შექმნა

1. გახსენით GitHub-ზე თქვენი რეპოზიტორია
2. დააჭირეთ "Pull requests" ტაბს
3. დააჭირეთ მწვანე "New pull request" ღილაკს
4. აირჩიეთ:
   - base: main
   - compare: თქვენი ფიჩერ-ბრენჩი (feature-toBucketSets ან feature-getBucketRange)
5. დააჭირეთ "Create pull request"
6. მიუთითეთ სათაური და მოკლე აღწერა იმისა, თუ რა ცვლილებები გააკეთეთ
7. დააჭირეთ "Create pull request" ღილაკს

### 3.2 კოდის რივიუს პროცესი

1. გადადით "Pull requests" ტაბზე
2. აირჩიეთ თქვენი პარტნიორის pull request
3. დააჭირეთ "Files changed" ტაბს
4. დაათვალიერეთ ცვლილებები

#### 3.2.1 კომენტარების დამატება

- კონკრეტულ კოდის ხაზზე კომენტარის დასამატებლად მაუსი მიიტანეთ ხაზთან და დააჭირეთ ლურჯ "+" ღილაკს
- დაწერეთ შენიშვნა და დააჭირეთ "Add single comment"

#### 3.2.2 რივიუს დასრულება

- როცა ყველა კომენტარი დაამატეთ, დააჭირეთ "Review changes" ღილაკს (ზედა მარჯვენა კუთხეში)
- აირჩიეთ ერთ-ერთი:
  - **Comment**: უბრალოდ ზოგადი კომენტარის დატოვება, გადაწყვეტილების გარეშე
  - **Approve**: კოდის დამტკიცება, მიუთითებს რომ მზადაა გასაერთიანებლად
  - **Request changes**: მიუთითებს რომ ცვლილებებია საჭირო პროცესის გასაგრძელებლად
- დაწერეთ ზოგადი კომენტარი
- დააჭირეთ "Submit review"

### 3.3 ცვლილებებზე რეაგირება

1. მიიღებთ რა შენიშვნებს, დაბრუნდით თქვენს ლოკალურ კოდთან
2. შეცვალეთ კოდი რივიუს კომენტარების შესაბამისად
3. შეინახეთ ცვლილებები:
   ```
   git add .
   git commit -m "შევასწორე კოდი რივიუს შენიშვნების მიხედვით"
   git push origin feature-yourFeature
   ```
4. ეს ავტომატურად განაახლებს არსებულ pull request-ს

## ნაწილი 4: კონფლიქტების გადაჭრა

### 4.1 კონფლიქტების აღმოჩენა

კონფლიქტი ჩნდება, როცა ორივე ბრენჩი ცვლის ერთი და იგივე ფაილის ერთსა და იმავე ნაწილს.

### 4.2 კონფლიქტების გადაჭრა GitHub-ზე

1. თუ კონფლიქტი გაქვთ, დააჭირეთ "Resolve conflicts" ღილაკს
2. გაიხსნება ტექსტური რედაქტორი, სადაც ნახავთ:
   ```
   <<<<<<< HEAD
   [მიმდინარე ბრენჩის კოდი]
   =======
   [შემოსული ბრენჩის კოდი]
   >>>>>>> feature-branch
   ```
3. დაარედაქტირეთ ფაილი, წაშალეთ მარკერები და გააერთიანეთ კოდი სასურველი სახით
4. დაასრულეთ რედაქტირება და დააჭირეთ "Mark as resolved"
5. ყველა კონფლიქტის მოგვარების შემდეგ, დააჭირეთ "Commit merge"

### 4.3 კონფლიქტების გადაჭრა ლოკალურად

ალტერნატიულად, შეგიძლიათ კონფლიქტები ლოკალურად მოაგვაროთ:

```
git checkout main
git pull
git checkout feature-branch
git merge main
```

მერჯ კონფლიქტის შემთხვევაში, დაარედაქტირეთ ფაილები, შემდეგ:

```
git add .
git commit -m "გადავჭერი მერჯ კონფლიქტები"
git push origin feature-branch
```

## ნაწილი 5: მერჯის დასრულება

### 5.1 Pull Request-ის მერჯი

1. როცა ყველა შენიშვნა და კონფლიქტი მოგვარებულია, გადადით pull request-ის გვერდზე
2. დააჭირეთ მწვანე "Merge pull request" ღილაკს
3. აირჩიეთ მერჯის ტიპი (ძირითადად "Create a merge commit")
4. დააჭირეთ "Confirm merge"
5. თუ გნებავთ, შეგიძლიათ მონიშნოთ "Delete branch" ოფცია

### 5.2 ლოკალური რეპოზიტორიის განახლება

მერჯის შემდეგ, განაახლეთ თქვენი ლოკალური რეპოზიტორია:

```
git checkout main
git pull
```
