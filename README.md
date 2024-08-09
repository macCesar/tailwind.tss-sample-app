# tailwindTSS Sample App

This app showcases a variety of user interface designs built using [Tailwind-like](https://tailwindcss.com/) styles applied with [PurgeTSS](https://purgetss.com/). Each example demonstrates how different UI components can be styled and structured to create visually appealing and functional interfaces for mobile applications developed with [Titanium SDK](https://titaniumsdk.com).

## Getting Started

First make sure you have **PurgeTSS** installed globally on your machine:
```bash
> [sudo] npm i -g purgetss
```

1. Download or clone this repo and navigate to the project root directory.
2. Compile the app to your device or emulator.

Optionally, you can run `npm install` to install the recommended dev dependencies.

### Important Notice!
> **PurgeTSS will OVERWRITE your existing `app.tss` file.**
>
> Upon the initial execution of **PurgeTSS**, your `app.tss` file is backed up to `_app.tss`.
>
> From this point forward, you have the option to add, delete, or update your custom classes in `_app.tss`.
>
> Alternatively, a better approach is to include your custom values in `config.js`. Further information is available in the [Configuration Section](customization/the-config-file).


Check out all available classes of: [tailwind.tss](https://github.com/macCesar/purgeTSS/blob/master/dist/tailwind.tss), [fontawesome.tss](https://github.com/macCesar/purgeTSS/blob/master/dist/fontawesome.tss), [materialicons.tss](https://github.com/macCesar/purgeTSS/blob/master/dist/materialicons.tss), [framework7icons.tss](https://github.com/macCesar/purgeTSS/blob/master/dist/framework7icons.tss).

Or, create your own [Custom Classes](https://purgetss.com/docs/customization/the-config-file).


**For more information, visit the [official documentation](https://github.com/macCesar/purgeTSS).**

## Example Views

### 'Customer Support' Example
```xml
<Alloy>
  <ScrollView>
    <View class="vertical mx-4 w-screen rounded-lg border-gray-400 bg-white shadow-lg">
      <ImageView class="to rounded-16 wh-16 mt-3" image="https://randomuser.me/api/portraits/women/17.jpg" />

      <View class="vertical mb-3 mt-3">
        <Label class="text-xl text-gray-800">Erin Lindford</Label>
        <Label class="text-base text-purple-500">Customer Support</Label>
        <Label class="text-sm text-gray-600">erinlindford@example.com</Label>
        <Label class="text-sm text-gray-600">(555) 765-4321</Label>
      </View>
    </View>
  </ScrollView>
</Alloy>
```

<img src="app/assets/images/customer-support-3.png" width="375" alt="iOS Screen - Customer Support">

### 'Card' Example
```xml
<Alloy>
  <ScrollView>
    <View class="vertical clip-enabled h-auto w-11/12 rounded-lg border-gray-400 bg-white">
      <ImageView class="shadow-md" image="https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&#x26;ixid=eyJhcHBfaWQiOjEyMDd9&#x26;auto=format&#x26;fit=crop&#x26;w=3300&#x26;q=80" />

      <View class="vertical m-3 h-auto text-gray-600">
        <View class="horizontal h-auto w-screen">
          <Label class="text-2xl font-thin text-gray-600">Card Content</Label>
          <Label class="text-sm font-semibold text-gray-500">May 23rd, 2021</Label>
        </View>

        <Label class="w-screen font-normal text-gray-500">This is some card content to demonstrate how the cards work.</Label>

        <Button class="rounded-8 mt-2 h-8 w-1/2 bg-gray-500 text-white">Read More</Button>
      </View>
    </View>
  </ScrollView>
</Alloy>
```

<img src="app/assets/images/card-content-3.png" width="375" alt="iOS Screen - Card Content">

### 'Nike' Example
```xml
<Alloy>
  <ScrollView>
    <View class="mx-10 shadow-lg">
      <View class="vertical clip-enabled rounded-lg border-gray-400 bg-white">
        <View class="vertical mx-4 my-2 h-auto">
          <Label class="w-full text-3xl font-bold text-gray-900">NIKE AIR</Label>
          <Label class="mt-1 w-full text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</Label>
        </View>

        <ImageView class="mt-2 h-auto w-full" image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80" alt="NIKE AIR"/>

        <View class="w-screen bg-gray-900">
          <View class="m-2 w-screen">
            <Label class="ml-0 text-xl font-bold text-gray-200">$129</Label>
            <Button class="mr-0 w-24 rounded bg-gray-200 text-sm font-semibold text-gray-900">Add to cart</Button>
          </View>
        </View>
      </View>
    </View>
  </ScrollView>
</Alloy>
```

<img src="app/assets/images/nike-3.png" width="375" alt="iOS Screen - Nike">

### 'Politico' Example
```xml
<Alloy>
  <ScrollView>
    <View class="vertical mx-4">
      <View class="mt-4">
        <Label class="w-screen text-sm font-bold text-red-600">CORONAVIRUS</Label>
      </View>

      <Label class="w-full text-4xl font-bold text-gray-800">Kemp and Bottoms hurl insults at each other in Georgia mask feud</Label>

      <Label class="mt-2 w-full text-gray-500">The war of words comes after the governor sued the Atlanta mayor over her city’s mask mandate.</Label>

      <ImageView class="mt-2" image="https://static.politico.com/dims4/default/fcd6d6a/2147483647/resize/1920x/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F22%2F87%2F2259ffd444678054896b9fa32b4d%2Fgettyimages-1221513169.jpg" />

      <Label class="my-2 h-auto w-screen border-b text-sm font-normal text-gray-600">Georgia Gov. Brian Kemp speaks to the media during a press conference. | Kevin C. Cox/Getty Images</Label>

      <TextArea class="-mx-1 w-screen bg-white text-xs font-thin italic text-gray-600">By Quint Forgey
07/17/2020 09:57 AM EDT
Updated: 07/17/2020 10:33 AM EDT</TextArea>

      <TextArea class="-mx-1 mb-4 h-auto w-screen bg-white text-sm font-thin text-gray-600">Georgia Gov. Brian Kemp and Atlanta Mayor Keisha Lance Bottoms hurled insults at one another Friday, as their legal battle over whether to mandate masks in the state’s capital city entered its second day.

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

<img src="app/assets/images/politico-3.png" width="375" alt="iOS Screen - Politico">

### 'House' Example
```xml
<Alloy>
  <ScrollView>
    <View class="vertical clip-enabled w-11/12 rounded-lg border-gray-400 bg-white">
      <ImageView class="w-screen" image="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=3067&amp;q=80" />

      <View class="vertical m-4 w-screen">
        <Label class="ml-0 text-sm font-bold text-gray-700">Detached house • 5y old</Label>
        <Label class="ml-0 text-3xl font-bold text-gray-900">$750,000</Label>
        <Label class="ml-0 text-gray-700">742 Evergreen Terrace</Label>
      </View>

      <View class="h-px w-screen bg-gray-300"></View>
      <View class="horizontal">
        <View class="horizontal mx-2 h-20 w-auto">
          <Label class="fa-solid fa-bed h-20 w-auto text-gray-800" />
          <Label class="ml-1 h-20 w-auto font-bold text-gray-800">3 Bedrooms</Label>
        </View>

        <View class="horizontal mx-2 h-20 w-auto">
          <Label class="fa-solid fa-bath h-20 text-gray-800" />
          <Label class="ml-1 h-20 font-bold text-gray-800">2 Bathrooms</Label>
        </View>
      </View>

      <View class="h-px w-screen bg-gray-300"></View>
      <View class="vertical w-screen bg-gray-100">
        <Label class="mx-4 mt-3 text-xs font-bold text-gray-600">REALTOR</Label>

        <View class="horizontal m-4">
          <ImageView class="rounded-10 wh-10" image="https://randomuser.me/api/portraits/women/17.jpg" />

          <View class="vertical w-screen">
            <Label class="ml-3 font-bold text-gray-900">Catherine Heffner</Label>
            <Label class="ml-3 text-sm text-gray-700">(555) 123-4567</Label>
          </View>
        </View>
      </View>
    </View>
  </ScrollView>
</Alloy>
```

<img src="app/assets/images/detached-house-3.png" width="375" alt="iOS Screen - Detached House">

### 'Projects' Example
```xml
<Alloy>
  <ScrollView>
    <View class="vertical clip-enabled mx-4 w-screen rounded-lg border-gray-500 bg-white">
      <View class="w-screen bg-gray-500">
        <Label class="mx-3 my-2 h-auto text-xl font-semibold text-white">PROJECTS</Label>
      </View>

      <View class="h-px w-screen bg-gray-500"></View>
      <View class="horizontal m-4 w-screen">
        <View class="mt-0 w-1/5">
          <Button class="rounded-12 fa-solid fa-code wh-12 ml-0 bg-indigo-500 text-2xl text-white"></Button>
        </View>

        <View class="vertical w-4/5">
          <Label class="w-screen text-sm text-gray-500">Engineering</Label>
          <Label class="mt-1 w-screen text-base font-semibold text-gray-900">GraphQL API</Label>
          <TextArea class="-ml-1 -mr-1 w-screen bg-white text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor a excepturi et minus ipsum hic, porro voluptatem totam nulla suscipit!</TextArea>

          <View class="horizontal w-screen">
            <View class="horizontal h-6 w-1/3">
              <Button class="fa-regular fa-user w-6 text-gray-500"/>
              <Label class="ml-1 text-sm font-bold text-gray-700">4</Label>
            </View>

            <View class="horizontal h-6 w-1/3">
              <Button class="fa-regular fa-comment-alt w-6 text-gray-500"/>
              <Label class="ml-1 text-sm font-bold text-gray-700">12</Label>
            </View>

            <View class="horizontal h-6 w-1/3">
              <Button class="fa-solid fa-align-left w-6 text-gray-500"/>
              <Label class="ml-1 text-sm font-bold text-gray-700">20</Label>
            </View>
          </View>
        </View>
      </View>

      <View class="h-px w-screen bg-gray-500"></View>
      <View class="horizontal m-4 w-screen">
        <View class="mt-0 w-1/5">
          <Button class="rounded-12 fa-regular fa-suitcase wh-12 ml-0 bg-green-500 text-2xl text-white"></Button>
        </View>

        <View class="vertical w-4/5">
          <Label class="w-screen text-sm text-gray-500">Human Resources</Label>
          <Label class="mt-1 w-screen text-base font-semibold text-gray-900">Profit sharing program</Label>
          <TextArea class="-ml-1 -mr-1 w-screen bg-white text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor a excepturi et minus ipsum hic, porro voluptatem totam nulla suscipit!</TextArea>

          <View class="horizontal w-screen">
            <View class="horizontal h-6 w-1/3">
              <Button class="fa-regular fa-user w-6 text-gray-500"/>
              <Label class="ml-1 text-sm font-bold text-gray-700">6</Label>
            </View>

            <View class="horizontal h-6 w-1/3">
              <Button class="fa-regular fa-comment-alt w-6 text-gray-500"/>
              <Label class="ml-1 text-sm font-bold text-gray-700">5</Label>
            </View>

            <View class="horizontal h-6 w-1/3">
              <Button class="fa-solid fa-align-left w-6 text-gray-500"/>
              <Label class="ml-1 text-sm font-bold text-gray-700">30</Label>
            </View>
          </View>
        </View>
      </View>
    </View>
  </ScrollView>
</Alloy>
```

<img src="app/assets/images/projects-3.png" width="375" alt="iOS Screen - Projects">

### 'Private Villa' Example
```xml
<Alloy>
  <ScrollView>
    <View class="vertical mx-4 w-screen bg-white">
      <View class="vertical">
        <ImageView class="w-screen rounded-lg" image="https://images.unsplash.com/photo-1452784444945-3f422708fe5e?ixlib=rb-1.2.1&#x26;ixid=eyJhcHBfaWQiOjEyMDd9&#x26;auto=format&#x26;fit=crop&#x26;w=512&#x26;q=80" />

        <View class="vertical mt-2 w-screen">
          <Label class="ml-0 text-xs font-bold text-gray-600">PRIVATE VILLA</Label>
          <Label class="ml-0 text-base font-bold text-gray-700">Relaxing All-Inclusive Resort in Cancun</Label>
          <Label class="ml-0 text-sm text-gray-600">$299 USD per night</Label>
        </View>
      </View>
    </View>
  </ScrollView>
</Alloy>
```

<img src="app/assets/images/private-villa-3.png" width="375" alt="iOS Screen - Private Villa">

### 'Login Form' Example
```xml
<Alloy>
  <ScrollView>
    <View class="vertical mx-8">
      <ImageView class="mt-3 w-56" image="/images/welcome.png" />

      <Label class="ml-1 mt-2 w-full text-left text-sm text-gray-900">Your Login</Label>
      <TextField class="return-key-type-next mt-1 h-10 w-screen rounded-md border-gray-400 bg-gray-50 pl-2 text-base text-gray-800" keyboardType="Ti.UI.KEYBOARD_TYPE_EMAIL" hintText="Email" />

      <Label class="ml-1 mt-4 w-full text-left text-sm text-gray-900">Your Password</Label>
      <TextField class="return-key-type-next mt-1 h-10 w-screen rounded-md border-gray-400 bg-gray-50 pl-2 text-base text-gray-800" hintText="Password" passwordMask="true" />

      <Button class="mt-4 h-10 w-screen rounded-md bg-gray-800 text-base text-white">Login</Button>

      <View class="horizontal mt-2 w-screen">
        <View class="horizontal mx-0 w-1/2" android:onClick="changeActive" ios:onSingletap="changeActive">
          <Button class="fa-regular fa-check-square fa-square w-6 text-gray-800" id="rememberMe" active='false' />
          <Button class="ml-0 text-sm text-gray-800">Remember me</Button>
        </View>

        <View class="horizontal mx-0 w-1/2">
          <Button class="w-screen text-right text-sm text-gray-800">Forgot password?</Button>
        </View>
      </View>

      <View class="vertical mb-8 mt-2 h-auto w-screen rounded-md bg-gray-100">
        <Label class="mx-3 mt-2 h-auto text-center text-xs text-gray-600">By creating an account you agree to our</Label>

        <Button class="mx-3 mb-1 h-auto text-center text-xs font-semibold text-gray-800">Terms and Conditions</Button>
      </View>
    </View>
  </ScrollView>
</Alloy>
```

<img src="app/assets/images/login-form-3.png" width="375" alt="iOS Screen - Login Form">
