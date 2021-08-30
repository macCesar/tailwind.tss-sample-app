# tailwindTSS Sample App

A [Titanium App](https://www.appcelerator.com/mobile-app-development-products/) showcasing [Tailwind CSS](https://tailwindcss.com/) styles applied with [purgeTSS](https://github.com/macCesar/purgeTSS/).

## UPDATE!!!
Please checkout my new [`purgeTSS`](https://github.com/macCesar/purgeTSS) CLI.

1. Install it globally on your machine.
```bash
> [sudo] npm i -g purgetss
```

2. Use any [tailwind.tss](https://github.com/macCesar/purgeTSS/blob/master/dist/tailwind.tss), [fontawesome.tss](https://github.com/macCesar/purgeTSS/blob/master/dist/fontawesome.tss), [materialicons.tss](https://github.com/macCesar/purgeTSS/blob/master/dist/materialdesignicons.tss), [lineicons.tss](https://github.com/macCesar/purgeTSS/blob/master/dist/lineicons.tss), [boxicons.tss](https://github.com/macCesar/purgeTSS/blob/master/dist/boxicons.tss) or your [custom.tss](https://github.com/macCesar/purgeTSS/blob/master/docs/configuring-guide.md) classes in your views.

3. Run `purgetss` inside your project’s root folder before compiling your App.
```bash
> purgetss
```

4. **And as simple as that, you'll have a purged `app.tss` file with only the styles used in your XML files.**

### Important Notice!
> When you run `purgeTSS` for the first time, it will backup your `app.tss` file to `_app.tss`.
>
> It will use it together with `tailwind.tss`, `fontawesome.tss`, `materialicons.tss`, `lineicons.tss` and your `custom.tss` file to create a new purged `app.tss` file.
>
> From now on, add, update or remove your custom classes in `_app.tss.`

**For more info check the [official repository](https://github.com/macCesar/purgeTSS)**

## Example Views
### 'Customer Support' example
```xml
<Alloy>
  <ScrollView>
    <View class="w-screen mx-4 bg-white border-gray-400 rounded-lg shadow-lg vertical">
      <ImageView class="w-16 h-16 mt-3 to rounded-16" image="https://randomuser.me/api/portraits/women/17.jpg" />

      <View class="mt-3 mb-3 vertical">
        <Label class="text-xl text-gray-800">Erin Lindford</Label>
        <Label class="text-base text-purple-500">Customer Support</Label>
        <Label class="text-sm text-gray-600">erinlindford@example.com</Label>
        <Label class="text-sm text-gray-600">(555) 765-4321</Label>
      </View>
    </View>
  </ScrollView>
</Alloy>
```

<img src="app/assets/images/customer-support-3.png" width="375" alt="iOS Screen - Customer Support" >

### 'Card' Example
```xml
<Alloy>
  <ScrollView>
    <View class="w-11/12 h-auto bg-white border-gray-400 rounded-lg vertical clip-enabled">
      <ImageView class="shadow-md" image="https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&#x26;ixid=eyJhcHBfaWQiOjEyMDd9&#x26;auto=format&#x26;fit=crop&#x26;w=3300&#x26;q=80" />

      <View class="h-auto m-3 text-gray-600 vertical">
        <View class="w-screen h-auto horizontal">
          <Label class="text-2xl font-thin text-gray-600">Card Content</Label>
          <Label class="text-sm font-semibold text-gray-500">May 23rd, 2021</Label>
        </View>

        <Label class="w-screen font-normal text-gray-500">This is some card content to demonstrate how the cards work.</Label>

        <Button class="w-1/2 h-8 mt-2 text-white bg-gray-500 rounded-8">Read More</Button>
      </View>
    </View>
  </ScrollView>
</Alloy>
```

<img src="app/assets/images/card-content-3.png" width="375" alt="iOS Screen - Card Content" >

### 'Nike' Example
```xml
<Alloy>
  <ScrollView>
    <View class="mx-10 shadow-lg">
      <View class="bg-white border-gray-400 rounded-lg vertical clip-enabled">
        <View class="h-auto mx-4 my-2 vertical">
          <Label class="w-full text-3xl font-bold text-gray-900">NIKE AIR</Label>
          <Label class="w-full mt-1 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</Label>
        </View>

        <ImageView class="w-full h-auto mt-2" image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80" alt="NIKE AIR"/>

        <View class="w-screen bg-gray-900">
          <View class="w-screen mx-2 my-2">
            <Label class="ml-0 text-xl font-bold text-gray-200">$129</Label>
            <Button class="w-24 mr-0 text-sm font-semibold text-gray-900 bg-gray-200 rounded">Add to cart</Button>
          </View>
        </View>
      </View>
    </View>
  </ScrollView>
</Alloy>
```

<img src="app/assets/images/nike-3.png" width="375" alt="iOS Screen - Nike" >

### 'Politico' Example
```xml
<Alloy>
  <ScrollView>
    <View class="mx-4 vertical">
      <View class="mt-4">
        <Label class="w-screen text-sm font-bold text-red-600">CORONAVIRUS</Label>
      </View>

      <Label class="w-full text-4xl font-bold text-gray-800">Kemp and Bottoms hurl insults at each other in Georgia mask feud</Label>

      <Label class="w-full mt-2 text-gray-500">The war of words comes after the governor sued the Atlanta mayor over her city’s mask mandate.</Label>

      <ImageView class="mt-2" image="https://static.politico.com/dims4/default/fcd6d6a/2147483647/resize/1920x/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F22%2F87%2F2259ffd444678054896b9fa32b4d%2Fgettyimages-1221513169.jpg" />

      <Label class="w-screen h-auto my-2 text-sm text-gray-600 border-b text-normal">Georgia Gov. Brian Kemp speaks to the media during a press conference. | Kevin C. Cox/Getty Images</Label>

      <TextArea class="w-screen -mx-1 text-xs italic font-thin text-gray-600 bg-white">By Quint Forgey
07/17/2020 09:57 AM EDT
Updated: 07/17/2020 10:33 AM EDT</TextArea>

      <TextArea class="w-screen h-auto mb-4 -mx-1 text-sm font-thin text-gray-600 bg-white">Georgia Gov. Brian Kemp and Atlanta Mayor Keisha Lance Bottoms hurled insults at one another Friday, as their legal battle over whether to mandate masks in the state’s capital city entered its second day.

During dueling appearances at a Capitol news briefing and in an interview with CNN, the Republican governor and the Democratic mayor both accused the other’s office of playing politics amid a pandemic that continues to ravage communities across Georgia.

Updating members of the media on the state’s coronavirus response, Kemp defended his decision to sue Atlanta’s mayor and city council in an effort to block local officials there from enforcing an order requiring residents to wear a mask in public.

“Mayor Bottoms’ mask mandate cannot be enforced, but her decision to shutter businesses and undermine economic growth is devastating,” Kemp told reporters in Atlanta, likening his administration’s legal action to “sending in the National Guard.”

“I refuse to sit back and watch as disastrous policies threaten the lives and livelihoods of our citizens,” he said. “We will fight to stop reckless actions and put people over pandemic politics.”

Meanwhile, on CNN, Bottoms dismissed Kemp’s unfolding criticism as “propaganda” and “completely inaccurate,” and called the escalating controversy over face coverings “very bizarre, quite frankly.”

Bottoms also charged that the governor’s lawsuit was politically motivated, remarking that she did not “think it was happenstance” that Kemp pursued litigation one day after President Donald Trump visited Atlanta.

Furthermore, Bottoms alleged the lawsuit represented an act of “personal retaliation.” She noted that other Georgia cities had imposed similar mask orders, and said the governor “sued us personally. He did not sue the city of Atlanta. He filed suit against mtself and our city council personally.”

The high-profile clash between two of Georgia’s top leaders came after Kemp issued a statewide order Wednesday banning local mask mandates. But Bottoms said her city’s order requiring face coverings would continue to apply, provoking Kemp to file his lawsuit in state court Thursday.

The feud has served to further elevate the national profile of Bottoms, who revealed this month that she had tested positive for Covid-19 and has attained greater public prominence due to reports that she is being vetted for the role of running mate to presumptive Democratic presidential nominee Joe Biden.

As for Kemp, the rift with Bottoms has dredged up earlier criticisms of his management of Georgia’s coronavirus outbreak.

The governor lifted his stay-at-home order at the end of April after memorably admitting earlier in the month that he had just learned asymptomatic infected people could spread the disease, and state officials were caught misrepresenting Covid-19 reporting data in May.

Kemp’s latest opposition to Bottoms’ order, at a time when even the Trump administration is encouraging deference to local coronavirus directives, has drawn significant criticism. It also Viewerges from the approaches of Republican governors in Southern states including Alabama, Arkansas and Texas, who have issued statewide mask mandates in recent days.

Kemp’s own lieutenant governor, Republican Geoff Duncan, appeared reluctant to offer a full-throated defense of the governor’s lawsuit Friday, instead repeatedly emphasizing the importance of mask-wearing.

“I hope we move past it,” Duncan told CNN of the ongoing controversy, adding that the “whole conversation around the mandate doesn’t help us get through this. It becomes a distraction [from] the health and well-being of 11 million Georgians.”

Although elected officials averse to mask mandates argue Americans should be able to make their own assessments regarding their safety, public health experts have warned that Covid-19 remains a highly contagious disease — and that those not wearing masks risk infecting other, potentially more vulnerable, people.
      </TextArea>
    </View>
  </ScrollView>
</Alloy>
```

<img src="app/assets/images/politico-3.png" width="375" alt="iOS Screen - Politico" >

### 'House' Example
```xml
<Alloy>
  <ScrollView>
    <View class="w-11/12 bg-white border-gray-400 rounded-lg vertical clip-enabled">
      <ImageView class="w-screen" image="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3067&amp;q=80" />

      <View class="w-screen m-4 vertical">
        <Label class="ml-0 text-sm font-bold text-gray-700">Detached house • 5y old</Label>
        <Label class="ml-0 text-3xl text-gray-900">$750,000</Label>
        <Label class="ml-0 text-gray-700">742 Evergreen Terrace</Label>
      </View>

      <View class="w-screen h-px bg-gray-300"></View>
      <View class="horizontal">
        <View class="w-auto h-20 mx-2 horizontal">
          <Label class="w-auto h-20 text-gray-800 fa fa-bed" />
          <Label class="w-auto h-20 ml-1 font-bold text-gray-800 ">3 Bedrooms</Label>
        </View>

        <View class="w-auto h-20 mx-2 horizontal">
          <Label class="h-20 text-gray-800 fa fa-bath" />
          <Label class="h-20 ml-1 font-bold text-gray-800">2 Bathrooms</Label>
        </View>
      </View>

      <View class="w-screen h-px bg-gray-300"></View>
      <View class="w-screen bg-gray-100 vertical">
        <Label class="mx-4 mt-3 text-xs font-bold text-gray-600">REALTOR</Label>

        <View class="m-4 horizontal">
          <ImageView class="w-10 h-10 rounded-10" image="https://randomuser.me/api/portraits/women/17.jpg" />

          <View class="w-screen vertical">
            <Label class="ml-3 font-bold text-gray-900">Catherine Heffner</Label>
            <Label class="ml-3 text-sm text-gray-700">(111) 111-1111</Label>
          </View>
        </View>
      </View>
    </View>
  </ScrollView>
</Alloy>
```

<img src="app/assets/images/detached-house-3.png" width="375" alt="iOS Screen - Detached House" >

### 'Projects' Example
```xml
<Alloy>
  <ScrollView>
    <View class="w-screen mx-4 bg-white border-gray-500 rounded-lg vertical clip-enabled">
      <View class="w-screen bg-gray-500">
        <Label class="h-auto mx-3 my-2 text-xl font-semibold text-white">PROJECTS</Label>
      </View>

      <View class="w-screen h-px bg-gray-500"></View>
      <View class="w-screen m-4 horizontal">
        <View class="w-1/5 mt-0">
          <Button class="w-12 h-12 ml-0 text-2xl text-white bg-indigo-500 rounded-12 fa fa-code"></Button>
        </View>

        <View class="w-4/5 vertical">
          <Label class="w-screen text-sm text-gray-500">Engineering</Label>
          <Label class="w-screen mt-1 text-base font-semibold text-gray-900">GraphQL API</Label>
          <TextArea class="w-screen -ml-1 -mr-1 text-sm text-gray-500 bg-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor a excepturi et minus ipsum hic, porro voluptatem totam nulla suscipit!</TextArea>

          <View class="w-screen horizontal">
            <View class="w-1/3 h-6 horizontal">
              <Button class="w-6 text-gray-500 far fa-user"/>
              <Label class="ml-1 text-sm font-bold text-gray-700">4</Label>
            </View>

            <View class="w-1/3 h-6 horizontal">
              <Button class="w-6 text-gray-500 far fa-comment-alt"/>
              <Label class="ml-1 text-sm font-bold text-gray-700">12</Label>
            </View>

            <View class="w-1/3 h-6 horizontal">
              <Button class="w-6 text-gray-500 fa fa-align-left"/>
              <Label class="ml-1 text-sm font-bold text-gray-700">20</Label>
            </View>
          </View>
        </View>
      </View>

      <View class="w-screen h-px bg-gray-500"></View>
      <View class="w-screen m-4 horizontal">
        <View class="w-1/5 mt-0">
          <Button class="w-12 h-12 ml-0 text-2xl text-white bg-green-500 rounded-12 fa fa-suitcase"></Button>
        </View>

        <View class="w-4/5 vertical">
          <Label class="w-screen text-sm text-gray-500">Human Resources</Label>
          <Label class="w-screen mt-1 text-base font-semibold text-gray-900">Profit sharing program</Label>
          <TextArea class="w-screen -ml-1 -mr-1 text-sm text-gray-500 bg-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor a excepturi et minus ipsum hic, porro voluptatem totam nulla suscipit!</TextArea>

          <View class="w-screen horizontal">
            <View class="w-1/3 h-6 horizontal">
              <Button class="w-6 text-gray-500 far fa-user"/>
              <Label class="ml-1 text-sm font-bold text-gray-700">6</Label>
            </View>

            <View class="w-1/3 h-6 horizontal">
              <Button class="w-6 text-gray-500 far fa-comment-alt"/>
              <Label class="ml-1 text-sm font-bold text-gray-700">5</Label>
            </View>

            <View class="w-1/3 h-6 horizontal">
              <Button class="w-6 text-gray-500 fa fa-align-left"/>
              <Label class="ml-1 text-sm font-bold text-gray-700">30</Label>
            </View>
          </View>
        </View>
      </View>
    </View>
  </ScrollView>
</Alloy>
```

<img src="app/assets/images/projects-3.png" width="375" alt="iOS Screen - Projects" >

### 'Private Villa' Example
```xml
<Alloy>
  <ScrollView>
    <View class="w-screen mx-4 bg-white vertical">
      <View class="vertical">
        <ImageView class="w-screen rounded-lg" image="https://images.unsplash.com/photo-1452784444945-3f422708fe5e?ixlib=rb-1.2.1&#x26;ixid=eyJhcHBfaWQiOjEyMDd9&#x26;auto=format&#x26;fit=crop&#x26;w=512&#x26;q=80" />

        <View class="w-screen mt-2 vertical">
          <Label class="ml-0 text-xs font-bold text-gray-600">PRIVATE VILLA</Label>
          <Label class="ml-0 text-base font-bold text-gray-700">Relaxing All-Inclusive Resort in Cancun</Label>
          <Label class="ml-0 text-sm text-gray-600">$299 USD per night</Label>
        </View>
      </View>
    </View>
  </ScrollView>
</Alloy>
```

<img src="app/assets/images/private-villa-3.png" width="375" alt="iOS Screen - Private Villa" >

### 'Login Form' Example
```xml
<Alloy>
  <ScrollView>
    <View class="mx-8 vertical">
      <ImageView class="w-56 mt-3" image="/images/welcome.png" />

      <Label class="w-full mt-2 ml-1 text-sm text-left text-gray-900">Your Login</Label>
      <TextField class="w-screen h-10 pl-2 mt-1 text-base text-gray-800 border-gray-400 rounded-md bg-gray-50" returnKeyType="Ti.UI.RETURNKEY_NEXT" keyboardType="Ti.UI.KEYBOARD_TYPE_EMAIL" hintText="Email" />

      <Label class="w-full mt-4 ml-1 text-sm text-left text-gray-900">Your Password</Label>
      <TextField class="w-screen h-10 pl-2 mt-1 text-base text-gray-800 border-gray-400 rounded-md bg-gray-50" returnKeyType="Ti.UI.RETURNKEY_NEXT" hintText="Password" passwordMask="true" />

      <Button class="w-screen h-10 mt-4 text-base text-white bg-gray-800 rounded-md">Login</Button>

      <View class="w-screen mt-2 horizontal">
        <View class="w-1/2 mx-0 horizontal" onClick="changeActive">
          <Button class="w-6 text-gray-800 far fa-check-square fa-square" id="rememberMe" active='false' />
          <Button class="ml-0 text-sm text-gray-800">Remember me</Button>
        </View>

        <View class="w-1/2 mx-0 horizontal">
          <Button class="w-screen text-sm text-right text-gray-800">Forgot password?</Button>
        </View>
      </View>

      <View class="w-screen h-auto mt-2 mb-8 bg-gray-100 rounded-md vertical">
        <Label class="h-auto mt-2 ml-3 mr-3 text-xs text-center text-gray-600">By creating an account you agree to our</Label>

        <Button class="h-auto mb-1 ml-3 mr-3 text-xs font-semibold text-center text-gray-800">Terms and Conditions</Button>
      </View>
    </View>
  </ScrollView>
</Alloy>
```

<img src="app/assets/images/login-form-3.png" width="375" alt="iOS Screen - Login Form" >
